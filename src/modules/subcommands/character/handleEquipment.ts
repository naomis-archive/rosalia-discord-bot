/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic to view a character's equipment.
 */
export const handleEquipment: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "It looks like you have not created a character yet!",
      });
      return;
    }

    const embed = new MessageEmbed();
    embed.setTitle(`${character.name}'s Equipment`);
    embed.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL());
    embed.addField(
      "Main Hand",
      character.equipment.mainHand || "*nothing equipped*",
      true
    );
    embed.addField(
      "Helmet",
      character.equipment.helmet || "*nothing equipped*",
      true
    );
    embed.addField(
      "Off Hand",
      character.equipment.offHand || "*nothing equipped*",
      true
    );
    embed.addField(
      "Armor",
      character.equipment.armor || "*nothing equipped*",
      true
    );
    embed.addField(
      "Accessory",
      character.equipment.accessory || "*nothing equipped*",
      true
    );

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "equipment command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "equipment", errorId)],
    });
  }
};
