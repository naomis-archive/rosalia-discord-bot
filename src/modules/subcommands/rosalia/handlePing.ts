/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { CommandHandler } from "../../../interfaces/CommandHandler";
import { errorEmbedGenerator } from "../../../utils/errorEmbedGenerator";
import { rosaErrorHandler } from "../../../utils/rosaErrorHandler";

/**
 * Generates an embed with Rosa's response time.
 */
export const handlePing: CommandHandler = async (
  Rosa,
  interaction
): Promise<void> => {
  try {
    const { createdTimestamp } = interaction;

    const delay = Date.now() - createdTimestamp;
    const isSlow = delay > 100;

    const pingEmbed = new MessageEmbed();
    pingEmbed.setTitle("Pong!");
    pingEmbed.setFooter(
      isSlow ? "I'm sorry for being slow..." : "Wow! I did it!"
    );
    pingEmbed.setDescription(`Response time: ${delay}ms`);
    pingEmbed.setFooter("Having fun? Donate: https://donate.nhcarrigan.com");

    await interaction.editReply({ embeds: [pingEmbed] });
  } catch (err) {
    const errorId = await rosaErrorHandler(
      Rosa,
      "ping command",
      err,
      interaction.guild?.name
    );
    await interaction
      .reply({
        embeds: [errorEmbedGenerator(Rosa, "ping", errorId)],
        ephemeral: true,
      })
      .catch(
        async () =>
          await interaction.editReply({
            embeds: [errorEmbedGenerator(Rosa, "ping", errorId)],
          })
      );
  }
};
