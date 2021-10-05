import { CommandInteraction, MessageEmbed } from "discord.js";

import { Character } from "../../../interfaces/game/Character";
import { Monster } from "../../../interfaces/game/Monster";
import { RosaliaNightsong } from "../../../interfaces/RosaliaNightsong";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Handles the logic when a player is defeated in battle.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {CommandInteraction} interaction The interaction payload from Discord.
 * @param {Character} character The player's character data.
 * @param {Monster} monster The opposing monster data.
 */
export const battleDefeat = async (
  Rosa: RosaliaNightsong,
  interaction: CommandInteraction,
  character: Character,
  monster: Monster
): Promise<void> => {
  try {
    character.stats.health = 10;
    character.stats.mana = 5;
    character.stats.attack =
      character.stats.attack - Math.ceil(Math.random() * 5);
    character.stats.defence =
      character.stats.defence - Math.ceil(Math.random() * 5);
    character.stats.magic =
      character.stats.magic + Math.ceil(Math.random() * 5);
    character.markModified("stats");
    await character.save();

    const resultEmbed = new MessageEmbed();
    resultEmbed.setTitle("Battle lost!");
    resultEmbed.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL());
    resultEmbed.setDescription(
      `You have been defeated by the ${monster.name}. You wake up back in town, feeling quite a bit weaker.`
    );

    await interaction.editReply({ embeds: [resultEmbed], components: [] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "battle flee module",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "battle flee module", errorId)],
      components: [],
    });
  }
};
