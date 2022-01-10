/* eslint-disable jsdoc/require-param */
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

import { nextUpdate, updateList } from "../../../config/data/updates";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed explaining the new release schedule, and what the update
 * process breaks in terms of lost cache.
 */
export const handleUpdates: CommandHandler = async (Rosa, interaction) => {
  try {
    const { commitHash: hash } = Rosa;
    const updateEmbed = new MessageEmbed();
    updateEmbed.setTitle("Update Information");
    updateEmbed.setDescription(
      "Rosa's updates are deployed every Saturday around 8AM Pacific Time."
    );
    updateEmbed.addField("Latest Updates", updateList.join("\n"));
    updateEmbed.addField(
      "Current Version",
      process.env.npm_package_version || "0.0.0"
    );
    updateEmbed.addField("Next Scheduled Update", nextUpdate);
    updateEmbed.addField(
      "Changelog",
      "View Rosalia's entire change log [in her documentation](https://docs.rosalianightsong.com/#/changelog)."
    );
    updateEmbed.addField(
      "Commit Hash",
      `[${hash.slice(
        0,
        7
      )}](https://github.com/rosalianightsong/discord-bot/commit/${hash})`
    );
    updateEmbed.setFooter(
      "Like the bot? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );

    const button = new MessageButton()
      .setLabel("View Changelog")
      .setEmoji("<:RosaNotes:883854700762505287>")
      .setStyle("LINK")
      .setURL("https://docs.rosalianightsong.com/#/changelog");

    const row = new MessageActionRow().addComponents([button]);
    await interaction.editReply({ embeds: [updateEmbed], components: [row] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "updates command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "updates", errorId)],
    });
  }
};
