/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

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

    const embed = new MessageEmbed();
    embed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );
    embed.setTitle(`${character.name}'s Inventory!`);
    embed.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL());
    embed.setDescription(
      "These are the items you currently have in your inventory."
    );
    embed.addField("Equippable Items", equippableString);
    embed.addField("Consumable Items", consumableString);
    embed.addField("Sellable Items", sellableString);
    embed.addField(
      "Backpack Slots",
      `${equippable.length + consumable.length + sellable.length} / ${
        character.inventory.backpack
      }`,
      true
    );
    embed.addField("Gold", `${character.inventory.gold}`, true);

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
