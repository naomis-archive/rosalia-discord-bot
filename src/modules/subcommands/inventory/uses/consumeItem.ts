import { MessageEmbed } from "discord.js";

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
 * @returns {MessageEmbed} An embed with the stats after consuming the item.
 */
export const consumeItem = async (
  Rosa: RosaliaNightsong,
  item: Consumable,
  character: Character
): Promise<MessageEmbed> => {
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

    const embed = new MessageEmbed();
    embed.setTitle(`Consumed ${item.name}`);
    embed.addField("Attack", character.stats.attack.toString(), true);
    embed.addField("Defence", character.stats.defence.toString(), true);
    embed.addField("Magic", character.stats.magic.toString(), true);
    embed.addField("Health", character.stats.health.toString(), true);
    embed.addField("Mana", character.stats.mana.toString(), true);
    embed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile.png"
    );

    return embed;
  } catch (error) {
    const errorId = await rosaErrorHandler(Rosa, "consume item helper", error);
    return errorEmbedGenerator(Rosa, "consume item helper", errorId);
  }
};
