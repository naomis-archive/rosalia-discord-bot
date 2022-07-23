/* eslint-disable jsdoc/require-param */
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";

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
    const updateEmbed = new EmbedBuilder();
    updateEmbed.setTitle("Update Information");
    updateEmbed.setDescription(
      "Rosa's updates are deployed every Saturday around 8AM Pacific Time."
    );
    updateEmbed.addFields([
      { name: "Latest Updates", value: updateList.join("\n") },
      {
        name: "Current Version",
        value: process.env.npm_package_version || "0.0.0",
      },
      {
        name: "Changelog",
        value:
          "View Rosalia's entire change log [in her documentation](https://docs.rosalianightsong.com/#/changelog?utm_source=discord&utm_medium=updates-command).",
      },
      {
        name: "Commit Hash",
        value: `[${hash.slice(
          0,
          7
        )}](https://github.com/rosalianightsong/discord-bot/commit/${hash})`,
      },
      {
        name: "Next Update",
        value: nextUpdate,
      },
    ]);
    updateEmbed.setFooter({
      text: "Like the bot? Donate: https://donate.nhcarrigan.com",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    const button = new ButtonBuilder()
      .setLabel("View Changelog")
      .setEmoji("<:RosaNotes:883854700762505287>")
      .setStyle(ButtonStyle.Link)
      .setURL(
        "https://docs.rosalianightsong.com/#/changelog?utm_source=discord&utm_medium=updates-command"
      );

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([button]);
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
