/*eslint-disable jsdoc/require-param */
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Returns a bit of text and some buttons with the different ways to contact the developer team.
 */
export const handleContact: CommandHandler = async (Rosa, interaction) => {
  try {
    const discordButton = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel("Join our support server.")
      .setURL("https://chat.nhcarrigan.com");
    const mastodonButton = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel("Follow us on Mastodon.")
      .setURL("https://mastodon.naomi.lgbt/@rosalia");
    const githubButton = new ButtonBuilder()
      .setStyle(ButtonStyle.Link)
      .setLabel("Create an issue on GitHub.")
      .setURL("https://github.com/RosaliaNightsong/discord-bot");

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
      discordButton,
      mastodonButton,
      githubButton,
    ]);
    await interaction.editReply({
      content: "Here are the options for getting in touch with us:",
      components: [row],
    });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "contact command",
      err,
      interaction.guild?.name
    );
    await interaction.editReply({
      embeds: [errorEmbedGenerator(Rosa, "contact", errorId)],
    });
  }
};
