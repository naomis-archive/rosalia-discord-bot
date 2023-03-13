/* eslint-disable jsdoc/require-param */
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
 * Generates an embed containing information on how to interact with Rosalia,
 * links to the support server, docs, and code.
 */
export const handleHelp: CommandHandler = async (Rosa, interaction) => {
  try {
    const helpEmbed = new EmbedBuilder();
    helpEmbed.setTitle("How to Interact with Rosa");
    helpEmbed.setDescription(
      "Heya! I'm an RPG game on Discord! To see what I can do, type `/` and select my section from the pop-up menu."
    );
    helpEmbed.addFields([
      {
        name: "Support Server",
        value:
          "If you need some extra guidance, join my support server where our team will be more than happy to guide you.",
      },
      {
        name: "Documentation",
        value:
          "As an alternative, you are welcome to view my documentation to see what I can do.",
      },
      {
        name: "Source Code",
        value:
          "You can also dive in to my source code and look at my code yourself.",
      },
      {
        name: "Bug Report",
        value:
          "Have I failed you in some way? You can report an issue, or let us know in the support server.",
      },
      {
        name: "Privacy Policy",
        value:
          "As part of my services, I collect and use some specific Discord related information. This information includes, but may not be limited to, your user name, nickname, this server's name, and your Discord ID. [View my full policy](https://docs.rosalianightsong.com/#/privacy.md?utm_source=discord&utm_medium=help-command)",
      },
    ]);
    helpEmbed.setFooter({
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
      .setURL("https://github.com/RosaliaNightsong/discord-bot");
    const docsButton = new ButtonBuilder()
      .setLabel("View the Documentation")
      .setStyle(ButtonStyle.Link)
      .setURL("https://docs.rosalianightsong.com");
    const reportButton = new ButtonBuilder()
      .setLabel("Report an Issue")
      .setStyle(ButtonStyle.Link)
      .setURL("https://github.com/RosaliaNightsong/discord-bot/issues/new/choose");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
      supportServerButton,
      inviteButton,
      codeButton,
      docsButton,
      reportButton,
    ]);

    await interaction.editReply({ embeds: [helpEmbed], components: [row] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "help command",
      err,
      interaction.guild?.name
    );
    await interaction
      .reply({
        embeds: [errorEmbedGenerator(Rosa, "help", errorId)],
        ephemeral: true,
      })
      .catch(
        async () =>
          await interaction.editReply({
            embeds: [errorEmbedGenerator(Rosa, "help", errorId)],
          })
      );
  }
};
