/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { betaTesters } from "../../../config/betaTesters";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed listing the people who assisted with the beta
 * testing.
 */
export const handleBeta: CommandHandler = async (Rosa, interaction) => {
  try {
    const embed = new MessageEmbed();
    embed.setTitle("Special Thanks to our beta testers!");
    embed.setDescription(
      betaTesters
        .sort((a, b) => {
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          }
          if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .join("\n")
    );
    embed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );
    await interaction.editReply({ embeds: [embed] });
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
