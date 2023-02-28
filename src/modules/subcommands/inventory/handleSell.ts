/* eslint-disable jsdoc/require-param */
import { EmbedBuilder } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { sellables } from "../../../config/data/sellables";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

import { equipItem } from "./uses/equipItem";

/**
 * Handles the logic to sell an item.
 */
export const handleSell: CommandHandler = async (Rosa, interaction) => {
  try {
    const target = interaction.options.getString("item", true);

    const character = await CharacterModel.findOne({
      discordId: interaction.user.id,
    });

    if (!character) {
      await interaction.editReply({
        content: "You have not created your character yet!",
      });
      return;
    }

    const data = [...equippables, ...consumables, ...sellables].find(
      (i) => i.name.toLowerCase() === target.toLowerCase()
    );

    const sellEmbed = new EmbedBuilder();
    sellEmbed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    if (!data) {
      sellEmbed.setTitle("Item not found");
      sellEmbed.setDescription(
        "That item does not appear to exist. Please try again."
      );
      sellEmbed.setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });
      await interaction.editReply({ embeds: [sellEmbed] });
      return;
    }

    const inventories = [
      ...character.inventory.consumable,
      ...character.inventory.sellable,
      ...character.inventory.equippable,
    ];

    const item = inventories.find((el) => el === data.name);
    if (!item) {
      sellEmbed.setTitle("Item not found");
      sellEmbed.setDescription("You do not have that item in your inventory.");
      await interaction.editReply({ embeds: [sellEmbed] });
      return;
    }

    if (data.type === "consumable") {
      const index = character.inventory.consumable.findIndex(
        (el) => el === data.name
      );
      character.inventory.consumable.splice(index, 1);
    }
    if (data.type === "sellable") {
      const index = character.inventory.sellable.findIndex(
        (el) => el === data.name
      );
      character.inventory.sellable.splice(index, 1);
    }
    if (data.type === "equippable") {
      if (character.equipment[data.slot] === data.name) {
        await equipItem(Rosa, data, character);
      }
      const index = character.inventory.equippable.findIndex(
        (el) => el === data.name
      );
      character.inventory.equippable.splice(index, 1);
    }
    character.inventory.gold += data.value;
    character.markModified("inventory");
    await character.save();

    sellEmbed.setTitle(`${data.name} sold`);
    sellEmbed.setDescription(`You sold ${data.name} for ${data.value} gold.`);
    sellEmbed.addFields([
      { name: "Gold", value: `${character.inventory.gold}` },
    ]);

    await interaction.editReply({ embeds: [sellEmbed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "sell command",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "sell", errorId)],
    });
  }
};
