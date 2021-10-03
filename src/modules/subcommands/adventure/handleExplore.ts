/* eslint-disable jsdoc/require-param */
import { explorations } from "../../../config/data/adventures";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { giveDungeon } from "../../results/giveDungeon";
import { giveItem } from "../../results/giveItem";

/**
 * Handles the logic of visiting an exploration area.
 */
export const handleExplore: CommandHandler = async (Rosa, interaction) => {
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
      !character.adventure.areas.find(
        (el) => el.toLowerCase() === destination.toLowerCase()
      )
    ) {
      await interaction.editReply({
        content: "You have not found this area yet!",
      });
      return;
    }

    const location = explorations.find(
      (exploration) =>
        exploration.name.toLowerCase() === destination.toLowerCase()
    );

    if (!location) {
      await interaction.editReply({
        content: `You tried to explore ${destination} but that location isn't in the database. Please contact the developer.`,
      });
      return;
    }

    if (Date.now() - character.adventure.cooldown < 3600000) {
      await interaction.editReply({
        content:
          "You are still recovering from your last activity. Try again later.",
      });
      return;
    }

    character.adventure.cooldown = Date.now();

    const result = Math.ceil(Math.random() * 100);

    if (result <= 60) {
      await character.save();
      await interaction.editReply({ content: "Battle system coming soon!" });
    }
    if (result > 60 && result <= 70) {
      await giveItem(Rosa, interaction, character, location);
    }
    if (result > 70 && result <= 80) {
      await giveDungeon(Rosa, interaction, character, location);
    }
    if (result > 80) {
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
