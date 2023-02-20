import { EmbedBuilder } from "discord.js";

import { Character } from "../interfaces/game/Character";

/**
 * Generates a message embed to display the information for a character.
 *
 * @param {Character} character The character to display information for.
 * @returns {EmbedBuilder} The generated embed.
 */
export const viewCharacter = (character: Character): EmbedBuilder => {
  const { name, description, race, gender, stats } = character;
  const embed = new EmbedBuilder();
  embed.setTitle(`${name}, the ${gender} ${race}`);
  embed.setDescription(description);
  embed.addFields([
    { name: "Attack", value: stats.attack.toString(), inline: true },
    { name: "Defence", value: stats.defence.toString(), inline: true },
    { name: "Magic", value: stats.magic.toString(), inline: true },
    { name: "Health", value: stats.health.toString(), inline: true },
    { name: "Mana", value: stats.mana.toString(), inline: true },
  ]);
  embed.setFooter({
    text: "Join our server: https://discord.gg/nhcarrigan",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });

  return embed;
};
