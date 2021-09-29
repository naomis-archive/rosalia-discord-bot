import { RewriteFrames } from "@sentry/integrations";
import * as Sentry from "@sentry/node";
import { Client, WebhookClient } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { RosaliaNightsong } from "./interfaces/RosaliaNightsong";
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
  validateEnv();

  const Rosa: RosaliaNightsong = new Client({
    intents: IntentOptions,
  }) as RosaliaNightsong;

  Rosa.webhook = new WebhookClient({ url: process.env.WH_URL || "oh no" });

  Rosa.on("ready", async () => await onReady(Rosa));

  Rosa.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await Rosa.login(process.env.DISCORD_TOKEN);
})();
