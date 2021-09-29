import { Client, WebhookClient } from "discord.js";

export interface RosaliaNightsong extends Client {
  webhook: WebhookClient;
}
