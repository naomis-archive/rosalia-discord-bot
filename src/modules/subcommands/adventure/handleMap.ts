/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

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

    const mapEmbed = new MessageEmbed();
    mapEmbed.setTitle("Available Destinations!");
    mapEmbed.setAuthor(
      interaction.user.tag,
      interaction.user.displayAvatarURL()
    );
    mapEmbed.setDescription(
      "These are the locations you are able to visit on an adventure."
    );
    mapEmbed.addField(
      "Exploration",
      character.adventure.areas.join(", ") || "*no areas to explore yet*"
    );
    mapEmbed.addField(
      "Dungeons",
      character.adventure.dungeons.join(", ") || "*no dungeons to clear yet*"
    );
    mapEmbed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );

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
