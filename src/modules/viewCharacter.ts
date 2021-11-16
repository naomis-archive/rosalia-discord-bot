import { MessageEmbed } from "discord.js";

import { Character } from "../interfaces/game/Character";

/**
 * Generates a message embed to display the information for a character.
 *
 * @param {Character} character The character to display information for.
 * @returns {MessageEmbed} The generated embed.
 */
export const viewCharacter = (character: Character): MessageEmbed => {
  const { name, description, race, gender, stats } = character;
  const embed = new MessageEmbed();
  embed.setTitle(`${name}, the ${gender} ${race}`);
  embed.setDescription(description);
  embed.addField("Attack", stats.attack.toString(), true);
  embed.addField("Defence", stats.defence.toString(), true);
  embed.addField("Magic", stats.magic.toString(), true);
  embed.addField("Health", stats.health.toString(), true);
  embed.addField("Mana", stats.mana.toString(), true);
  embed.setFooter("Having fun? Donate: https://donate.nhcarrigan.com");

  return embed;
};
