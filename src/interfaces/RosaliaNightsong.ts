import { Client, WebhookClient } from "discord.js";

import { Command } from "./Command";

export interface RosaliaNightsong extends Client {
  webhook: WebhookClient;
  commands: Command[];
  configs: {
    token: string;
    homeId: string;
    userId: string;
    mongo: string;
  };
}
