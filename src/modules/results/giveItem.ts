import { CommandInteraction, EmbedBuilder } from "discord.js";

import { consumables } from "../../config/data/consumables";
import { equippables } from "../../config/data/equippables";
import { sellables } from "../../config/data/sellables";
import { Adventure } from "../../interfaces/game/Adventure";
import { Character } from "../../interfaces/game/Character";
import { RosaliaNightsong } from "../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../utils/getRandomValue";
import { rosaErrorHandler } from "../../utils/rosaErrorHandler";

/**
 * Module to handle giving a character a random item from an adventure.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character record.
 * @param {Adventure} adventure The data for the area the player visited.
 */
export const giveItem = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  adventure: Adventure
): Promise<void> => {
  try {
    const randomItemName = getRandomValue(adventure.results.treasure);
    const randomItem = [...equippables, ...consumables, ...sellables].find(
      (el) => el.name === randomItemName
    );

    if (!randomItem) {
      await interaction.editReply({
        content: `You found a ${randomItemName} but the record for that doesn't seem to exist. Please contact the developer.`,
      });
      return;
    }

    const inventoryLimit = character.inventory.backpack;
    const inventoryHeld = [
      ...character.inventory.sellable,
      ...character.inventory.equippable,
      ...character.inventory.consumable,
    ].length;
    const overLimit = inventoryHeld >= inventoryLimit;

    const embed = new EmbedBuilder();
    embed.setTitle(`${adventure.name} Results!`);
    embed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    embed.setDescription(
      `You found a treasure chest! When you open it, inside is a ${randomItem.name}! Unfortunately, your backpack is full and you cannot carry any more items! You return to town empty handed.`
    );
    embed.setFooter({
      text: "Join our server: https://discord.gg/nhcarrigan",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    if (!overLimit) {
      character.inventory[randomItem.type].push(randomItem.name);
      character.markModified("inventory");
      await character.save();
      embed.setDescription(
        `You found a treasure chest! When you open it, inside is a ${randomItem.name}! You slip it in to your backpack before returning to town.`
      );
    }
    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "give item module",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "give item module", errorId)],
    });
  }
};
