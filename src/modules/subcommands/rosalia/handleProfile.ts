/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates a link to Rosalia's profile!
 */
export const handleProfile: CommandHandler = async (Rosa, interaction) => {
  try {
    const profileEmbed = new MessageEmbed();
    profileEmbed.setTitle("Rosalia's Profile");
    profileEmbed.setDescription(
      "Hi there! I'm Rosalia Nightsong! I'm a character created by nhcarrigan! You can read more about who I am by [visiting my profile](https://www.rosalianightsong.com)!"
    );
    profileEmbed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );

    await interaction.editReply({ embeds: [profileEmbed] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "profile command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "profile", errorId)],
    });
  }
};
