import { RewriteFrames } from "@sentry/integrations";
import * as Sentry from "@sentry/node";
import { ActivityType, Client, WebhookClient } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import { onGuildCreate } from "./events/onGuildCreate";
import { onGuildDelete } from "./events/onGuildDelete";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { RosaliaNightsong } from "./interfaces/RosaliaNightsong";
import { createServer } from "./server/createServer";
import { loadCommands } from "./utils/loadCommands";
import { registerCommands } from "./utils/registerCommands";
import { rosaLogHandler } from "./utils/rosaLogHandler";
import { validateEnv } from "./utils/validateEnv";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

(async () => {
  rosaLogHandler.log("debug", "Starting process...");
  const Rosa: RosaliaNightsong = new Client({
    intents: IntentOptions,
  }) as RosaliaNightsong;

  rosaLogHandler.log("debug", "Loading environment...");
  validateEnv(Rosa);

  Rosa.webhook = new WebhookClient({ url: process.env.WH_URL || "oh no" });

  await connectDatabase(Rosa);
  await createServer(Rosa);

  rosaLogHandler.log("debug", "Loading commands...");
  await loadCommands(Rosa);
  await registerCommands(Rosa);

  Rosa.on("ready", async () => await onReady(Rosa));

  Rosa.on(
    "interactionCreate",
    async (interaction) => await onInteraction(Rosa, interaction)
  );

  Rosa.on("guildCreate", async (guild) => await onGuildCreate(Rosa, guild));

  Rosa.on("guildDelete", async (guild) => await onGuildDelete(Rosa, guild));

  await Rosa.login(process.env.DISCORD_TOKEN);

  Rosa.user?.setActivity({
    name: "an RPG on Discord!",
    type: ActivityType.Playing,
  });
})();
