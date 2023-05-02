import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { marketChoices } from "../config/data/markets";
import { Command } from "../interfaces/Command";
import { handlePurchase } from "../modules/subcommands/market/handlePurchase";
import { handleVisit } from "../modules/subcommands/market/handleVisit";
import { errorEmbedGenerator } from "../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

export const market: Command = {
  data: new SlashCommandBuilder()
    .setName("market")
    .setDescription("Visit the local market.")
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("visit")
        .setDescription("View the wares of a chosen market.")
        .addStringOption((option) =>
          option
            .setName("location")
            .setDescription("The market location to visit.")
            .setRequired(true)
            .addChoices(...marketChoices)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("purchase")
        .setDescription("Purchase an item from the market.")
        .addStringOption((option) =>
          option
            .setName("item")
            .setDescription("The item to purchase.")
            .setRequired(true)
        )
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "visit":
          await handleVisit(Rosa, interaction);
          break;
        case "purchase":
          await handlePurchase(Rosa, interaction);
          break;
        default:
          await interaction.editReply({ content: "Invalid command!" });
      }
    } catch (err) {
      const errorId = await rosaErrorHandler(
        Rosa,
        "market group command",
        err,
        interaction.guild?.name
      );
      await interaction.editReply({
        embeds: [errorEmbedGenerator(Rosa, "market group", errorId)],
      });
    }
  },
};
