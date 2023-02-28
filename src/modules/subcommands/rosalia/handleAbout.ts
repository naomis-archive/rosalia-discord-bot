/* eslint-disable jsdoc/require-param */
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";

import CharacterModel from "../../../database/models/CharacterModel";
import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { getCounts } from "../../../utils/getCounts";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Returns information about the bot.
 */
export const handleAbout: CommandHandler = async (Rosa, interaction) => {
  try {
    const { guilds, members, commands } = getCounts(Rosa);
    const characterCount = await CharacterModel.countDocuments();
    const aboutEmbed = new EmbedBuilder();
    aboutEmbed.setTitle("Rosalia Nightsong");
    aboutEmbed.setAuthor({
      name: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });
    aboutEmbed.setDescription(
      "I am a Discord bot that offers a fun and relaxing RPG game you can play in your servers! I was created by [nhcarrigan](https://www.nhcarrigan.com). You can view my [source code](https://github.com/RosaliaNightsong/discord-bot) or join my [official chat server](https://chat.nhcarrigan.com)!"
    );
    aboutEmbed.addFields([
      {
        name: "Creation Date",
        value: "Sunday, 31 May 2020",
        inline: true,
      },
      {
        name: "Guilds",
        value: guilds.toString(),
        inline: true,
      },
      {
        name: "Members",
        value: members.toString(),
        inline: true,
      },
      {
        name: "Commands",
        value: commands.toString(),
        inline: true,
      },
      {
        name: "Registered Adventurers",
        value: characterCount.toString(),
        inline: true,
      },
      {
        name: "Favorite Colour",
        value: "Green",
        inline: true,
      },
    ]);
    aboutEmbed.setFooter({
      text: "Join our server: https://chat.naomi.lgbt",
      iconURL: "https://cdn.nhcarrigan.com/profile.png",
    });

    const supportServerButton = new ButtonBuilder()
      .setLabel("Join the Support Server")
      .setStyle(ButtonStyle.Link)
      .setURL("https://chat.nhcarrigan.com");
    const inviteButton = new ButtonBuilder()
      .setLabel("Add Rosalia to your server!")
      .setStyle(ButtonStyle.Link)
      .setURL("https://invite.rosalianightsong.com");
    const codeButton = new ButtonBuilder()
      .setLabel("View Rosalia's Source Code")
      .setStyle(ButtonStyle.Link)
      .setURL("https://github.com/rosalianightsong/discord-bot");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
      supportServerButton,
      inviteButton,
      codeButton,
    ]);

    await interaction.editReply({ embeds: [aboutEmbed], components: [row] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "about command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "about", errorId)],
    });
  }
};
