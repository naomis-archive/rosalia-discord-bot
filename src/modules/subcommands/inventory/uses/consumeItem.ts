import { EmbedBuilder } from "discord.js";

import { Character } from "../../../../interfaces/game/Character";
import { Consumable } from "../../../../interfaces/game/Consumable";
import { RosaliaNightsong } from "../../../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../../utils/rosaErrorHandler";

/**
 * Handles the logic for using a consumable item.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {Consumable} item The item to consume.
 * @param {Character} character The character consuming the item.
 * @returns {EmbedBuilder} An embed with the stats after consuming the item.
 */
export const consumeItem = async (
  Rosa: RosaliaNightsong,
  item: Consumable,
  character: Character
): Promise<EmbedBuilder> => {
  try {
    const index = character.inventory.consumable.findIndex(
      (el) => el === item.name
    );
    character.inventory.consumable.splice(index, 1);
    item.effects.forEach((effect) => {
      character.stats[effect.stat] =
        character.stats[effect.stat] + effect.bonus;
    });
    character.markModified("stats");
    character.markModified("inventory");
    await character.save();

    const embed = new EmbedBuilder();
    embed.setTitle(`Consumed ${item.name}`);
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
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    return embed;
  } catch (error) {
    const errorId = await rosaErrorHandler(Rosa, "consume item helper", error);
    return errorEmbedGenerator(Rosa, "consume item helper", errorId);
  }
};
