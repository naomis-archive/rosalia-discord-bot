import { RewriteFrames } from "@sentry/integrations";
import * as Sentry from "@sentry/node";
import { Client } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { rosaLogHandler } from "./utils/rosaLogHandler";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
  rosaLogHandler.log("error", "Missing discord token...");
  process.exit(1);
}

const Rosalia = new Client({ intents: IntentOptions });

Rosalia.on("ready", onReady);

Rosalia.on(
  "interactionCreate",
  async (interaction) => await onInteraction(interaction)
);

Rosalia.login(token);
