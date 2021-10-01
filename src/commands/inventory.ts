/* eslint-disable jsdoc/require-jsdoc */
import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { Command } from "../interfaces/Command";
import { handleDetails } from "../modules/subcommands/inventory/handleDetails";
import { handleSell } from "../modules/subcommands/inventory/handleSell";
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
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("details")
        .setDescription("See the information about an item.")
        .addStringOption((option) =>
          option
            .setName("item")
            .setDescription("The name of the item you want to view.")
            .setRequired(true)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("sell")
        .setDescription("Sells one of your items.")
        .addStringOption((option) =>
          option
            .setName("item")
            .setDescription("The name of the item you want to sell.")
            .setRequired(true)
        )
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "view":
          await handleView(Rosa, interaction);
          break;
        case "details":
          await handleDetails(Rosa, interaction);
          break;
        case "sell":
          await handleSell(Rosa, interaction);
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
