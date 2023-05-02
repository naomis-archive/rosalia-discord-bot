import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { restChoices } from "../config/data/restOptions";
import { Command } from "../interfaces/Command";
import { handleDungeon } from "../modules/subcommands/adventure/handleDungeon";
import { handleExplore } from "../modules/subcommands/adventure/handleExplore";
import { handleMap } from "../modules/subcommands/adventure/handleMap";
import { handleRest } from "../modules/subcommands/adventure/handleRest";
import { handleSearch } from "../modules/subcommands/adventure/handleSearch";
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
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("explore")
        .setDescription("Explore an area you have discovered.")
        .addStringOption((option) =>
          option
            .setName("area")
            .setDescription("The name of the area you would like to explore.")
            .setRequired(true)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("dungeon")
        .setDescription("Explore a dungeon you have discovered.")
        .addStringOption((option) =>
          option
            .setName("area")
            .setDescription(
              "The name of the dungeon you would like to explore."
            )
            .setRequired(true)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("rest")
        .setDescription(
          "Take a nice 8 hour rest to recover some health and mana."
        )
        .addStringOption((option) =>
          option
            .setName("room")
            .setDescription("Choose what room you'd like to sleep in.")
            .setRequired(true)
            .addChoices(...restChoices)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("search")
        .setDescription("Search around for new areas to explore.")
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "map":
          await handleMap(Rosa, interaction);
          break;
        case "explore":
          await handleExplore(Rosa, interaction);
          break;
        case "dungeon":
          await handleDungeon(Rosa, interaction);
          break;
        case "rest":
          await handleRest(Rosa, interaction);
          break;
        case "search":
          await handleSearch(Rosa, interaction);
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
