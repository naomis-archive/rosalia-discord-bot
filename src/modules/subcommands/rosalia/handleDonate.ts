/* eslint-disable jsdoc/require-param */
import { MessageActionRow, MessageButton, MessageEmbed } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed with links to donate to Rosalia's development.
 */
export const handleDonate: CommandHandler = async (Rosa, interaction) => {
  try {
    const donateEmbed = new MessageEmbed();
    donateEmbed.setTitle("Sponsor my Development!");
    donateEmbed.setDescription(
      "It would mean so much to me if you would help sponsor my development. Your kind donations would mean nhcarrigan could continue building new features, maintaining the server I live on, and so much more! Check the buttons below for ways you can donate!"
    );

    const githubButton = new MessageButton()
      .setLabel("Donate on GitHub!")
      .setStyle("LINK")
      .setURL("https://github.com/sponsors/nhcarrigan");
    const patreonButton = new MessageButton()
      .setLabel("Donate on Patreon!")
      .setStyle("LINK")
      .setURL("https://www.patreon.com/nhcarrigan");
    const paypalButton = new MessageButton()
      .setLabel("Donate on Paypal!")
      .setStyle("LINK")
      .setURL("https://paypal.me/nhcarrigan");

    const row = new MessageActionRow().addComponents([
      githubButton,
      patreonButton,
      paypalButton,
    ]);

    await interaction.editReply({ embeds: [donateEmbed], components: [row] });
  } catch (error) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "donate command",
      error,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "donate", errorId)],
    });
  }
};
