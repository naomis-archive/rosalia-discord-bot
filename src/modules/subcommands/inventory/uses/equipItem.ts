import { MessageEmbed } from "discord.js";

import { equippables } from "../../../../config/data/equippables";
import { Character } from "../../../../interfaces/game/Character";
import { Equipment } from "../../../../interfaces/game/Equipment";
import { RosaliaNightsong } from "../../../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../../utils/rosaErrorHandler";

/**
 * Handles the logic for using an equippable item.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {Equipment} item The item to equip.
 * @param {Character} character The character consuming the item.
 * @returns {MessageEmbed} An embed with the stats after consuming the item.
 */
export const equipItem = async (
  Rosa: RosaliaNightsong,
  item: Equipment,
  character: Character
): Promise<MessageEmbed> => {
  try {
    const embed = new MessageEmbed();

    if (character.equipment[item.slot] === item.name) {
      character.equipment[item.slot] = "";
      item.effects.forEach((effect) => {
        character.stats[effect.stat] =
          character.stats[effect.stat] - effect.bonus;
      });
    } else if (!character.equipment[item.slot]) {
      character.equipment[item.slot] = item.name;
      item.effects.forEach((effect) => {
        character.stats[effect.stat] =
          character.stats[effect.stat] + effect.bonus;
      });
    } else {
      const oldItem = equippables.find(
        (el) => el.name === character.equipment[item.slot]
      );
      oldItem?.effects.forEach((effect) => {
        character.stats[effect.stat] =
          character.stats[effect.stat] - effect.bonus;
      });
      item.effects.forEach((effect) => {
        character.stats[effect.stat] =
          character.stats[effect.stat] + effect.bonus;
      });
      character.equipment[item.slot] = item.name;
    }
    character.markModified("stats");
    character.markModified("equipment");
    character.markModified("inventory");
    await character.save();

    embed.setTitle(`Equip ${item.name}`);
    embed.addField("Attack", character.stats.attack.toString(), true);
    embed.addField("Defence", character.stats.defence.toString(), true);
    embed.addField("Magic", character.stats.magic.toString(), true);
    embed.addField("Health", character.stats.health.toString(), true);
    embed.addField("Mana", character.stats.mana.toString(), true);
    embed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );

    return embed;
  } catch (error) {
    const errorId = await rosaErrorHandler(Rosa, "equip item helper", error);
    return errorEmbedGenerator(Rosa, "equip item helper", errorId);
  }
};
