import { CommandInteraction, MessageEmbed } from "discord.js";

import { Character } from "../../../interfaces/game/Character";
import { Monster } from "../../../interfaces/game/Monster";
import { RosaliaNightsong } from "../../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic when a monster flees from battle.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character data.
 * @param {Monster} monster The opposing monster data.
 * @param {number} health The player's remaining health.
 * @param {number} mana The player's remaining mana.
 */
export const battleMonsterFlee = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  monster: Monster,
  health: number,
  mana: number
): Promise<void> => {
  try {
    character.stats.health = health;
    character.stats.mana = mana;
    character.markModified("stats");
    await character.save();

    const resultEmbed = new MessageEmbed();
    resultEmbed.setTitle("Monster fled!");
    resultEmbed.setAuthor(
      interaction.user.tag,
      interaction.user.displayAvatarURL()
    );
    resultEmbed.setDescription(
      `The ${monster.name} ran away! You return to town feeling a bit disappointed.`
    );
    resultEmbed.setFooter("Having fun? Donate: https://donate.nhcarrigan.com");

    await interaction.editReply({ embeds: [resultEmbed], components: [] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "battle monster flee module",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [
        errorEmbedGenerator(Rosa, "battle monster flee module", errorId),
      ],
      components: [],
    });
  }
};
