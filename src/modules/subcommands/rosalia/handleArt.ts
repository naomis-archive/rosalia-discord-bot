/* eslint-disable jsdoc/require-param */
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

import { artList } from "../../../config/artList";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { getRandomValue } from "../../../utils/getRandomValue";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Returns information about the bot.
 */
export const handleArt: CommandHandler = async (Rosa, interaction) => {
  try {
    const art = getRandomValue(artList);
    const artEmbed = new MessageEmbed();
    artEmbed.setTitle(art.artName);
    artEmbed.setDescription(
      `This portrait of me was done by [${art.artist}](${art.artistUrl})`
    );
    artEmbed.setImage(
      `https://www.rosalianightsong.com/assets/art/${art.fileName.replace(
        /\s/g,
        "%20"
      )}`
    );
    artEmbed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );

    const artButton = new MessageButton()
      .setLabel("View More Art!")
      .setStyle("LINK")
      .setURL(
        "https://www.rosalianightsong.com/gallery?utm_source=discord&utm_medium=art-command"
      );

    const row = new MessageActionRow().addComponents([artButton]);

    await interaction.editReply({ embeds: [artEmbed], components: [row] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "art command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "art", errorId)],
    });
  }
};
