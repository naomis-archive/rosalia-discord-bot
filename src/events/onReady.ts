import { EmbedBuilder } from "discord.js";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaLogHandler } from "../utils/rosaLogHandler";

/**
 * Handles the ready event from Discord.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 */
export const onReady = async (Rosa: RosaliaNightsong): Promise<void> => {
  rosaLogHandler.log("debug", "Rosalia is online!");

  const readyEmbed = new EmbedBuilder();
  readyEmbed.setTitle("Rosalia is online!");
  readyEmbed.setDescription(
    `Running version ${process.env.npm_package_version}`
  );

  await Rosa.webhook.send({ embeds: [readyEmbed] });
};
