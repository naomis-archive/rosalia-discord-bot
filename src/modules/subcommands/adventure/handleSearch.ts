/* eslint-disable jsdoc/require-param */

import { explorations } from "../../../config/data/adventures";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { showCooldown } from "../../results/showCooldown";

/**
 * Handles the logic for searching for new exploration areas.
 */
export const handleSearch: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;
    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    if (Date.now() - character.adventure.cooldown <= 0) {
      await interaction.editReply({
        embeds: [showCooldown(character.adventure.cooldown - Date.now())],
      });
      return;
    }

    character.adventure.cooldown = Date.now() + 3600000;
    character.markModified("adventure");

    const didFind = Math.ceil(Math.random() * 100) <= 20;

    if (!didFind) {
      await character.save();
      await interaction.editReply({
        content:
          "You spend an hour searching around, but don't find anything new.",
      });
      return;
    }

    const newArea =
      explorations[Math.floor(Math.random() * explorations.length)];

    if (character.adventure.areas.includes(newArea.name)) {
      await character.save();
      await interaction.editReply({
        content: `After some searching, you find yourself in the ${newArea.name} again. Unfortunately, this was already on your map so your time has been wasted.`,
      });
      return;
    }

    character.adventure.areas.push(newArea.name);
    character.markModified("adventure");
    await character.save();

    await interaction.editReply({
      content: `You discovered the ${newArea.name}! You carefully mark the location on your map, for further exploration.`,
    });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "search command",
      err,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "search", errorId)],
    });
  }
};
