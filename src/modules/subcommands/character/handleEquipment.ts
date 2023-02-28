/* eslint-disable jsdoc/require-param */
import { EmbedBuilder } from "discord.js";

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

    const embed = new EmbedBuilder();
    embed.setTitle(`${character.name}'s Equipment`);
    embed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    embed.addFields([
      {
        name: "Main Hand",
        value: character.equipment.mainHand || "*nothing equipped*",
      },
      {
        name: "Off Hand",
        value: character.equipment.offHand || "*nothing equipped*",
      },
      {
        name: "Helmet",
        value: character.equipment.helmet || "*nothing equipped*",
      },
      {
        name: "Armor",
        value: character.equipment.armor || "*nothing equipped*",
      },
      {
        name: "Accessory",
        value: character.equipment.accessory || "*nothing equipped*",
      },
    ]);
    embed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

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
