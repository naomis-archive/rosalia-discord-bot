import { CommandInteraction, EmbedBuilder } from "discord.js";

import { consumables } from "../../../config/data/consumables";
import { equippables } from "../../../config/data/equippables";
import levelScale from "../../../config/data/levelScale";
import { sellables } from "../../../config/data/sellables";
import { Character } from "../../../interfaces/game/Character";
import { Monster } from "../../../interfaces/game/Monster";
import { RosaliaNightsong } from "../../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../../utils/getRandomValue";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic when a player wins the battle.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character data.
 * @param {Monster} monster The opposing monster data.
 * @param {number} health The player's remaining health.
 * @param {number} mana The player's remaining mana.
 */
export const battleVictory = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  monster: Monster,
  health: number,
  mana: number
): Promise<void> => {
  try {
    let resultString = `You have defeated the ${monster.name}!\nYou have earned ${monster.drops.exp} experience points and ${monster.drops.gold} gold!`;
    character.stats.health = health;
    character.stats.mana = mana;
    character.experience.xp = character.experience.xp + monster.drops.exp;
    character.inventory.gold = character.inventory.gold + monster.drops.gold;
    if (
      character.experience.level < 100 &&
      character.experience.xp >= levelScale[character.experience.level]
    ) {
      const level = character.experience.level + 1;
      character.experience.level = level;
      character.stats.health =
        character.stats.health + Math.ceil(Math.random() * 10);
      character.stats.mana =
        character.stats.mana + Math.ceil(Math.random() * 10);
      character.stats.attack =
        character.stats.attack + Math.ceil(Math.random() * (5 + level));
      character.stats.defence =
        character.stats.defence + Math.ceil(Math.random() * (5 + level));
      character.stats.magic =
        character.stats.magic + Math.ceil(Math.random() * (5 + level));
      resultString += `\nYou have reached ${character.experience.level}!`;
    }

    const itemDrop = Math.ceil(Math.random() * 100) <= 20;

    if (itemDrop) {
      const itemName = getRandomValue(monster.drops.items);

      const itemData = [...equippables, ...consumables, ...sellables].find(
        (el) => el.name === itemName
      );

      if (!itemData) {
        resultString += `\nThe monster dropped a ${itemName} but the data wasn't found. Please contact the developer.`;
      } else {
        const backpackUse = [
          ...character.inventory.sellable,
          ...character.inventory.equippable,
          ...character.inventory.consumable,
        ].length;
        if (backpackUse >= character.inventory.backpack) {
          resultString += `\nThe monster dropped a ${itemName}, but your backpack is too full!`;
        } else {
          character.inventory[itemData.type].push(itemData.name);
          resultString += `\nThe monster dropped a ${itemName}! You slip it into your backpack.`;
        }
      }
    }

    character.markModified("stats");
    character.markModified("experience");
    character.markModified("inventory");
    await character.save();

    const resultEmbed = new EmbedBuilder();
    resultEmbed.setTitle("Battle Won!");
    resultEmbed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    resultEmbed.setDescription(
      resultString + "\nYou return to town feeling excited about your conquest."
    );
    resultEmbed.setFooter({
      text: "Having fun? Donate: https://donate.nhcarrigan.com",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    await interaction.editReply({ embeds: [resultEmbed], components: [] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "battle victory module",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "battle victory module", errorId)],
      components: [],
    });
  }
};
