/* eslint-disable jsdoc/require-param */
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed containing information on how to interact with Rosalia,
 * links to the support server, docs, and code.
 */
export const handleHelp: CommandHandler = async (Rosa, interaction) => {
  try {
    const helpEmbed = new MessageEmbed();
    helpEmbed.setTitle("How to Interact with Rosa");
    helpEmbed.setDescription(
      "Heya! I'm an RPG game on Discord! To see what I can do, type `/` and select my section from the pop-up menu."
    );
    helpEmbed.addField(
      "Support Server",
      "If you need some extra guidance, join my support server where our team will be more than happy to guide you."
    );
    helpEmbed.addField(
      "Documentation",
      "As an alternative, you are welcome to view my documentation to see what I can do."
    );
    helpEmbed.addField(
      "Source Code",
      "You can also dive in to my source code and look at my code yourself."
    );
    helpEmbed.addField(
      "Bug Report",
      "Have I failed you in some way? You can report an issue, or let us know in the support server."
    );
    helpEmbed.addField(
      "Privacy Policy",
      "As part of my services, I collect and use some specific Discord related information. This information includes, but may not be limited to, your user name, nickname, this server's name, and your Discord ID. [View my full policy](https://docs.rosalianightsong.com/#/privacy.md?utm_source=discord&utm_medium=help-command)"
    );
    helpEmbed.setFooter(
      "Having fun? Donate: https://donate.nhcarrigan.com",
      "https://cdn.nhcarrigan.com/profile-transparent.png"
    );
    const supportServerButton = new MessageButton()
      .setLabel("Join the Support Server")
      .setStyle("LINK")
      .setURL("https://chat.nhcarrigan.com");
    const inviteButton = new MessageButton()
      .setLabel("Add Becca to your server!")
      .setStyle("LINK")
      .setURL("https://invite.beccalyria.com");
    const codeButton = new MessageButton()
      .setLabel("View Becca's Source Code")
      .setStyle("LINK")
      .setURL("https://github.com/beccalyria/discord-bot");
    const docsButton = new MessageButton()
      .setLabel("View the Documentation")
      .setStyle("LINK")
      .setURL("https://docs.beccalyria.com");
    const reportButton = new MessageButton()
      .setLabel("Report an Issue")
      .setStyle("LINK")
      .setURL("https://github.com/beccalyria/discord-bot/issues/new/choose");

    const row = new MessageActionRow().addComponents([
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
