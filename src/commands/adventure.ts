/* eslint-disable jsdoc/require-jsdoc */
import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { Command } from "../interfaces/Command";
import { handleMap } from "../modules/subcommands/adventure/handleMap";
import { errorEmbedGenerator } from "../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

export const adventure: Command = {
  data: new SlashCommandBuilder()
    .setName("adventure")
    .setDescription("Commands related to the adventure system.")
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("map")
        .setDescription("View the available destinations you've discovered.")
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "map":
          await handleMap(Rosa, interaction);
          break;
        default:
          await interaction.editReply({ content: "Invalid command!" });
      }
    } catch (err) {
      const errorId = await rosaErrorHandler(
        Rosa,
        "adventure group command",
        err,
        interaction.guild?.name
      );
      await interaction.editReply({
        embeds: [errorEmbedGenerator(Rosa, "adventure group", errorId)],
      });
    }
  },
};
