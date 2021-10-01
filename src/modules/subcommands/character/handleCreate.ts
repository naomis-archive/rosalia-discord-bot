/* eslint-disable jsdoc/require-param */
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { viewCharacter } from "../../viewCharacter";

/**
 * Handles the logic for creating a character.
 */
export const handleCreate: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const hasCharacter = await CharacterModel.findOne({ discordId: user });

    if (hasCharacter) {
      await interaction.editReply({
        content: "You already have a character, and cannot create another one!",
      });
      return;
    }

    const name = interaction.options.getString("name", true);
    const gender = interaction.options.getString("gender", true);
    const race = interaction.options.getString("race", true);
    const description = interaction.options.getString("description", true);

    const newCharacter = await CharacterModel.create({
      discordId: user,
      name,
      description,
      race,
      gender,
      stats: {
        attack: Math.ceil(Math.random() * 5),
        defence: Math.ceil(Math.random() * 5),
        magic: Math.ceil(Math.random() * 5),
        health: Math.ceil(Math.random() * 5),
        mana: Math.ceil(Math.random() * 5),
      },
      experience: {
        level: 1,
        xp: 0,
      },
      equipment: {
        mainHand: null,
        offHand: null,
        armor: null,
        helmet: null,
        accessory: null,
      },
      inventory: {
        equippable: [],
        consumable: [],
        sellable: [],
        gold: 0,
        backpack: 5,
      },
      adventure: {
        areas: ["Farmlands"],
        dungeons: [],
        cooldown: 0,
      },
    });

    const characterEmbed = viewCharacter(newCharacter);

    await interaction.editReply({
      content: "Your character has been created!",
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
