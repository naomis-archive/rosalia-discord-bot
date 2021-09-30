/* eslint-disable jsdoc/require-jsdoc */
import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { Command } from "../interfaces/Command";
import { handleView } from "../modules/subcommands/inventory/handleView";
import { errorEmbedGenerator } from "../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

export const inventory: Command = {
  data: new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("Inventory management commands.")
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("view")
        .setDescription("See what's in your inventory.")
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "view":
          await handleView(Rosa, interaction);
          break;
        default:
          await interaction.editReply({ content: "Invalid command!" });
      }
    } catch (error) {
      const errorId = await rosaErrorHandler(
        Rosa,
        "inventory group command",
        error,
        interaction.guild?.id
      );
      await interaction.editReply({
        embeds: [errorEmbedGenerator(Rosa, "inventory group", errorId)],
      });
    }
  },
};
