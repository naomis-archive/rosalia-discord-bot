/* eslint-disable jsdoc/require-jsdoc */
import {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
} from "@discordjs/builders";

import { Command } from "../interfaces/Command";
import { handleCreate } from "../modules/subcommands/character/handleCreate";
import { handleEquipment } from "../modules/subcommands/character/handleEquipment";
import { handleUpdate } from "../modules/subcommands/character/handleUpdate";
import { handleView } from "../modules/subcommands/character/handleView";
import { errorEmbedGenerator } from "../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

export const character: Command = {
  data: new SlashCommandBuilder()
    .setName("character")
    .setDescription("Handles things related to your character.")
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("create")
        .setDescription("Create your character!")
        .addStringOption((option) =>
          option
            .setName("name")
            .setDescription("Your character's name.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("race")
            .setDescription("Your character's race.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("gender")
            .setDescription("Your character's gender.")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("description")
            .setDescription("A description of your character.")
            .setRequired(true)
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("view")
        .setDescription("View your character's information.")
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("update")
        .setDescription("Update your character's information.")
        .addStringOption((option) =>
          option.setName("name").setDescription("Your character's name.")
        )
        .addStringOption((option) =>
          option.setName("race").setDescription("Your character's race.")
        )
        .addStringOption((option) =>
          option.setName("gender").setDescription("Your character's gender.")
        )
        .addStringOption((option) =>
          option
            .setName("description")
            .setDescription("A description of your character.")
        )
    )
    .addSubcommand(
      new SlashCommandSubcommandBuilder()
        .setName("equipment")
        .setDescription("View your character's equipment")
    ),
  run: async (Rosa, interaction) => {
    try {
      await interaction.deferReply();

      const subcommand = interaction.options.getSubcommand();

      switch (subcommand) {
        case "create":
          await handleCreate(Rosa, interaction);
          break;
        case "view":
          await handleView(Rosa, interaction);
          break;
        case "update":
          await handleUpdate(Rosa, interaction);
          break;
        case "equipment":
          await handleEquipment(Rosa, interaction);
          break;
        default:
          await interaction.editReply({ content: "Invalid Command!" });
      }
    } catch (error) {
      const errorId = await rosaErrorHandler(
        Rosa,
        "character group command",
        error,
        interaction.guild?.name
      );
      await interaction.editReply({
        embeds: [errorEmbedGenerator(Rosa, "character group", errorId)],
      });
    }
  },
};
