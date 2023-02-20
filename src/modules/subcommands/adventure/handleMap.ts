/* eslint-disable jsdoc/require-param */
import { EmbedBuilder } from "discord.js";

import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Creates an embed containing a character's available adventure areas.
 */
export const handleMap: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    const mapEmbed = new EmbedBuilder();
    mapEmbed.setTitle("Available Destinations!");
    mapEmbed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    mapEmbed.setDescription(
      "These are the locations you are able to visit on an adventure."
    );
    mapEmbed.addFields([
      {
        name: "Exploration",
        value:
          character.adventure.areas.join(", ") || "*no areas to explore yet*",
      },
      {
        name: "Dungeons",
        value:
          character.adventure.dungeons.join(", ") ||
          "*no dungeons to explore yet*",
      },
    ]);
    mapEmbed.setFooter({
      text: "Join our server: https://discord.gg/nhcarrigan",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    await interaction.editReply({ embeds: [mapEmbed] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "map command",
      err,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "map", errorId)],
    });
  }
};
