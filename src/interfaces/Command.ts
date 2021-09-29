import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

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
    interaction: CommandInteraction
  ) => Promise<void>;
}
