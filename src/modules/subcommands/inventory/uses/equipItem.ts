import { EmbedBuilder } from "discord.js";

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
 * @returns {EmbedBuilder} An embed with the stats after consuming the item.
 */
export const equipItem = async (
  Rosa: RosaliaNightsong,
  item: Equipment,
  character: Character
): Promise<EmbedBuilder> => {
  try {
    const embed = new EmbedBuilder();

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
    embed.addFields([
      {
        name: "Attack",
        value: character.stats.attack.toString(),
        inline: true,
      },
      {
        name: "Defense",
        value: character.stats.defence.toString(),
        inline: true,
      },
      { name: "Magic", value: character.stats.magic.toString(), inline: true },
      {
        name: "Health",
        value: character.stats.health.toString(),
        inline: true,
      },
      { name: "Mana", value: character.stats.mana.toString(), inline: true },
    ]);
    embed.setFooter({
      text: "Having fun? Donate: https://donate.nhcarrigan.com",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    return embed;
  } catch (error) {
    const errorId = await rosaErrorHandler(Rosa, "equip item helper", error);
    return errorEmbedGenerator(Rosa, "equip item helper", errorId);
  }
};
