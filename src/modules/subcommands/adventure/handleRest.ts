import { EmbedBuilder } from "discord.js";

import { restOptions, Room } from "../../../config/data/restOptions";
import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";
import { showCooldown } from "../../results/showCooldown";

/**
 * Handles the logic for resting in the inn.
 */
export const handleRest: CommandHandler = async (Rosa, interaction) => {
  try {
    const user = interaction.user.id;

    const room = interaction.options.getString("room", true);

    if (!Object.keys(restOptions).includes(room)) {
      await interaction.editReply({
        content: `You tried to rest in ${room} but no data was found. Please contact the dev.`,
      });
      return;
    }

    const roomData = restOptions[room as Room];

    const character = await CharacterModel.findOne({ discordId: user });

    if (!character) {
      await interaction.editReply({
        content: "You have not created a character yet!",
      });
      return;
    }

    if (character.inventory.gold < roomData.gold) {
      await interaction.editReply({
        content: "You do not have enough gold to stay there!",
      });
      return;
    }

    if (Date.now() - character.adventure.cooldown <= 0) {
      await interaction.editReply({
        embeds: [showCooldown(character.adventure.cooldown - Date.now())],
      });
      return;
    }

    character.inventory.gold = character.inventory.gold - roomData.gold;
    character.adventure.cooldown = Date.now() + 28800000;

    const healthGain = Math.floor(Math.random() * 10 + roomData.health);
    const manaGain = Math.floor(Math.random() * 5 + roomData.mana);
    character.stats.health = character.stats.health + healthGain;
    character.stats.mana = character.stats.mana + manaGain;

    character.markModified("inventory");
    character.markModified("adventure");
    character.markModified("stats");
    await character.save();

    const restEmbed = new EmbedBuilder();
    restEmbed.setTitle("You took a rest!");
    restEmbed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    restEmbed.setDescription(
      `Your rest was ${room}. You recovered ${healthGain} health and ${manaGain} mana.`
    );
    restEmbed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    await interaction.editReply({ embeds: [restEmbed] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "rest command",
      err,
      interaction.guild?.id
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "rest", errorId)],
    });
  }
};
