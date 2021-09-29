import { CommandInteraction } from "discord.js";

import { RosaliaNightsong } from "./RosaliaNightsong";

/**
 * Handles the logic execution for a sub-command.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 */
export type CommandHandler = (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction
) => Promise<void>;
