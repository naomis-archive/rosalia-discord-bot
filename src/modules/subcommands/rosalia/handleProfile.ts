import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates a link to Rosalia's profile!
 */
export const handleProfile: CommandHandler = async (Rosa, interaction) => {
  try {
    const profileEmbed = new EmbedBuilder();
    profileEmbed.setTitle("Rosalia's Profile");
    profileEmbed.setDescription(
      "Hi there! I'm Rosalia Nightsong! I'm a character created by nhcarrigan! You can read more about who I am by [visiting my profile](https://www.rosalianightsong.com?utm_source=discord&utm_medium=profile-command)!"
    );
    profileEmbed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    const profileButton = new ButtonBuilder()
      .setLabel("View Rosalia's Profile")
      .setStyle(ButtonStyle.Link)
      .setURL(
        "https://www.rosalianightsong.com?utm_source=discord&utm_medium=profile-command"
      );

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
      profileButton,
    ]);

    await interaction.editReply({ embeds: [profileEmbed], components: [row] });
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
