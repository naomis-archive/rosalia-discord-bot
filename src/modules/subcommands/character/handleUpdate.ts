import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { viewCharacter } from "../../viewCharacter";

/**
 * Handles the logic for updating a character.
 */
export const handleUpdate: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    const name = interaction.options.getString("name");
    const gender = interaction.options.getString("gender");
    const race = interaction.options.getString("race");
    const description = interaction.options.getString("description");

    character.name = name || character.name;
    character.gender = gender || character.gender;
    character.race = race || character.race;
    character.description = description || character.description;

    await character.save();

    const characterEmbed = viewCharacter(character);

    await interaction.editReply({
      content: "Your character has been updated!",
      embeds: [characterEmbed],
    });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "create command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "create", errorId)],
    });
  }
};
