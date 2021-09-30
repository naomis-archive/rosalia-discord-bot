/* eslint-disable jsdoc/require-param */
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { viewCharacter } from "../../viewCharacter";

/**
 * Handles the logic to view a character's stats.
 */
export const handleView: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "It looks like you have not created a character yet!",
      });
      return;
    }

    const embed = viewCharacter(character);

    await interaction.editReply({ embeds: [embed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "view command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "view", errorId)],
    });
  }
};
