import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { ChatInputCommandInteraction } from "discord.js";

import { RosaliaNightsong } from "./RosaliaNightsong";

export interface Command {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  /**
   * Handles the logic for running a given command.
   *
   * @param {CommandInteraction} interaction The interaction payload from Discord.
   */
  run: (
    Rosa: RosaliaNightsong,
    interaction: ChatInputCommandInteraction
  ) => Promise<void>;
}
