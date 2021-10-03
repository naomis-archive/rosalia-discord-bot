/* eslint-disable jsdoc/require-param */
import { dungeons } from "../../../config/data/adventures";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { giveItem } from "../../results/giveItem";

/**
 * Handles the logic of visiting a dungeon area.
 */
export const handleDungeon: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;
    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    const destination = interaction.options.getString("area", true);

    if (
      !character.adventure.dungeons.find(
        (el) => el.toLowerCase() === destination.toLowerCase()
      )
    ) {
      await interaction.editReply({
        content: "You have not found this dungeon yet!",
      });
      return;
    }

    const location = dungeons.find(
      (dungeon) => dungeon.name.toLowerCase() === destination.toLowerCase()
    );

    if (!location) {
      await interaction.editReply({
        content: `You tried to explore ${destination} but that location isn't in the database. Please contact the developer.`,
      });
      return;
    }

    if (Date.now() - character.adventure.cooldown < 14400000) {
      await interaction.editReply({
        content:
          "You are still recovering from your last activity. Try again later.",
      });
      return;
    }

    character.adventure.cooldown = Date.now();

    const result = Math.ceil(Math.random() * 100);

    if (result <= 50) {
      await character.save();
      await interaction.editReply({ content: "Battle system coming soon!" });
    }
    if (result > 50 && result <= 70) {
      await giveItem(Rosa, interaction, character, location);
    }
    if (result > 70) {
      await character.save();
      await interaction.editReply({
        content: `You spend some time wandering the ${location.name}, but find nothing of importance. You return to town feeling unsatisfied.`,
      });
    }
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "explore command",
      error,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "explore", errorId)],
    });
  }
};
