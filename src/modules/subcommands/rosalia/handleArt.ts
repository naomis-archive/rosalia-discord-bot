/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

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
    artEmbed.setFooter("Having fun? Donate: https://donate.nhcarrigan.com");

    await interaction.editReply({ embeds: [artEmbed] });
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
