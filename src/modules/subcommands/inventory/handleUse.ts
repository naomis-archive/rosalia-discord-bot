/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { sellables } from "../../../config/data/sellables";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

import { consumeItem } from "./uses/consumeItem";
import { equipItem } from "./uses/equipItem";

/**
 * Handles the logic to use an item.
 */
export const handleUse: CommandHandler = async (Rosa, interaction) => {
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

    const validEmbed = new MessageEmbed();

    if (!data) {
      validEmbed.setTitle("Item not found");
      validEmbed.setAuthor(
        interaction.user.tag,
        interaction.user.displayAvatarURL()
      );
      validEmbed.setDescription(
        "That item does not appear to exist. Please try again."
      );
      await interaction.editReply({ embeds: [validEmbed] });
      return;
    }

    if (data.type === "sellable") {
      validEmbed.setTitle("Cannot use that");
      validEmbed.setDescription("Sellable items cannot be used.");
      await interaction.editReply({ embeds: [validEmbed] });
      return;
    }

    const inventories = [
      ...character.inventory.consumable,
      ...character.inventory.sellable,
      ...character.inventory.equippable,
    ];

    const item = inventories.find((el) => el === data.name);
    if (!item) {
      validEmbed.setTitle("Item not found");
      validEmbed.setDescription("You do not have that item in your inventory.");
      await interaction.editReply({ embeds: [validEmbed] });
      return;
    }

    if (data.type === "consumable") {
      const embed = await consumeItem(Rosa, data, character);
      await interaction.editReply({ embeds: [embed] });
      return;
    }
    if (data.type === "equippable") {
      const embed = await equipItem(Rosa, data, character);
      await interaction.editReply({ embeds: [embed] });
      return;
    }
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "use command",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "use", errorId)],
    });
  }
};
