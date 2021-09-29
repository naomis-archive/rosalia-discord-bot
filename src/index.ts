import { Client } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { logHandler } from "./helpers/logHandler";

const token = process.env.DISCORD_TOKEN;

if (!token) {
  logHandler.log("error", "Missing discord token...");
  process.exit(1);
}

const Rosalia = new Client({ intents: IntentOptions });

Rosalia.on("ready", onReady);

Rosalia.on(
  "interactionCreate",
  async (interaction) => await onInteraction(interaction)
);

Rosalia.login(token);
