/* eslint-disable jsdoc/require-param */
import { EmbedBuilder } from "discord.js";

import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles viewing a character's inventory.
 */
export const handleView: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet.",
      });
      return;
    }

    const { equippable, consumable, sellable } = character.inventory;

    const equippableString = equippable.length
      ? equippable.join(", ")
      : "*no equippable items*";
    const consumableString = consumable.length
      ? consumable.join(", ")
      : "*no consumable items*";
    const sellableString = sellable.length
      ? sellable.join(", ")
      : "*no sellable items*";

    const embed = new EmbedBuilder();
    embed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });
    embed.setTitle(`${character.name}'s Inventory!`);
    embed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    embed.setDescription(
      "These are the items you currently have in your inventory."
    );
    embed.addFields([
      {
        name: "Equippable Items",
        value: equippableString,
      },
      {
        name: "Consumable Items",
        value: consumableString,
      },
      {
        name: "Sellable Items",
        value: sellableString,
      },
      {
        name: "Backpack Slots",
        value: `${equippable.length + consumable.length + sellable.length} / ${
          character.inventory.backpack
        }`,
        inline: true,
      },
      {
        name: "Gold",
        value: String(character.inventory.gold),
        inline: true,
      },
    ]);

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "view command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "view", errorId)],
    });
  }
};
