/* eslint-disable jsdoc/require-param */
import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import { purchasableItems } from "../../../config/data/markets";
import { sellables } from "../../../config/data/sellables";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic for purchasing an item.
 */
export const handlePurchase: CommandHandler = async (Rosa, interaction) => {
  try {
    const target = interaction.options.getString("item", true);

    const character = await CharacterModel.findOne({
      discordId: interaction.user.id,
    });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    if (
      !purchasableItems.find(
        (item) => item.toLowerCase() === target.toLowerCase()
      )
    ) {
      await interaction.editReply({
        content:
          "You check all of the local shoppes but do not find that item anywhere!",
      });
      return;
    }

    const item = [...consumables, ...equippables, ...sellables].find(
      (el) => el.name.toLowerCase() === target.toLowerCase()
    );

    if (!item) {
      await interaction.editReply({
        content: `You tried to purchase ${target} but the data was not found. Please contact the developer!`,
      });
      return;
    }

    if (character.inventory.gold < item.value * 5) {
      await interaction.editReply({
        content: `The ${item.name} costs ${
          item.value * 5
        } gold, but you only have ${character.inventory.gold}!`,
      });
      return;
    }

    const usedSlots =
      character.inventory.consumable.length +
      character.inventory.equippable.length +
      character.inventory.sellable.length;

    if (usedSlots >= character.inventory.backpack) {
      await interaction.editReply({
        content:
          "You do not have enough space in your inventory for new items!",
      });
      return;
    }

    character.inventory.gold = character.inventory.gold - item.value * 5;
    character.inventory[item.type].push(item.name);
    character.markModified("inventory");

    await character.save();

    await interaction.editReply({
      content: `You have successfully purchased an ${item.name}!`,
    });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "purchase command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "purchase", errorId)],
    });
  }
};
