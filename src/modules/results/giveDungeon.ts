import { CommandInteraction, EmbedBuilder } from "discord.js";

import { dungeons } from "../../config/data/adventures";
import { Adventure } from "../../interfaces/game/Adventure";
import { Character } from "../../interfaces/game/Character";
import { RosaliaNightsong } from "../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../utils/getRandomValue";
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
    if (!adventure.results.dungeon || !adventure.results.dungeon.length) {
      await interaction.editReply({
        content: `You could have discovered a dungeon, but the ${adventure.name} adventure has no dungeons attached! Please contact the developer.`,
      });
      return;
    }
    const random = getRandomValue(adventure.results.dungeon);
    const dungeon = dungeons.find((el) => el.name === random);

    if (!dungeon) {
      await interaction.editReply({
        content: `You discovered the ${adventure.results.dungeon} dungeon, but the record does not exist. Please contact the developer.`,
      });
      return;
    }

    const embed = new EmbedBuilder();
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
    embed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    embed.setDescription(
      `While exploring the area, you discover something strange... You make a note of the location and return back to town.`
    );
    embed.addFields([
      {
        name: `${dungeon.name} discovered!`,
        value: getRandomValue(dungeon.description),
      },
    ]);
    embed.setFooter({
      text: "Having fun? Donate: https://donate.nhcarrigan.com",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

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
