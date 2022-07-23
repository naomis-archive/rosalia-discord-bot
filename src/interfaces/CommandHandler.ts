import { ChatInputCommandInteraction } from "discord.js";

import { RosaliaNightsong } from "./RosaliaNightsong";

/**
 * Handles the logic execution for a sub-command.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @param {ChatInputCommandInteraction} interaction The interaction payload from Discord.
 */
export type CommandHandler = (
  Rosa: RosaliaNightsong,
  interaction: ChatInputCommandInteraction
) => Promise<void>;
