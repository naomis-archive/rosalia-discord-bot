import { CommandInteraction, MessageEmbed } from "discord.js";

import { dungeons } from "../../config/data/adventures";
import { Adventure } from "../../interfaces/game/Adventure";
import { Character } from "../../interfaces/game/Character";
import { RosaliaNightsong } from "../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../utils/rosaErrorHandler";

/**
 * Handles the process of unlocking a dungeon.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character data.
 * @param {Adventure} adventure The adventure the player went on.
 */
export const giveDungeon = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  adventure: Adventure
): Promise<void> => {
  try {
    const dungeon = dungeons.find(
      (el) => el.name === adventure.results.dungeon
    );

    if (!dungeon) {
      await interaction.editReply({
        content: `You discovered the ${adventure.results.dungeon} dungeon, but the record does not exist. Please contact the developer.`,
      });
      return;
    }

    const embed = new MessageEmbed();
    embed.setTitle(`${adventure.name} Results!`);

    if (character.adventure.dungeons.includes(dungeon.name)) {
      embed.setDescription(
        `You find yourself in front of the ${dungeon.name} again. Feeling like this was a waste of time, you return back to town.`
      );
      await interaction.editReply({ embeds: [embed] });
      return;
    }

    character.adventure.dungeons.push(dungeon.name);
    character.markModified("adventure");
    await character.save();

    embed.setDescription(
      `While exploring the area, you discover something strange... You make a note of the location and return back to town.`
    );
    embed.addField(`${dungeon.name} discovered!`, dungeon.description);

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "give dungeon module",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "give dungeon module", errorId)],
    });
  }
};
