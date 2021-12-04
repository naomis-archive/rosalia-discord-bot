import { MessageEmbed } from "discord.js";
import { connect } from "mongoose";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

/**
 * Instantiates the database connection.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 */
export const connectDatabase = async (
  Rosa: RosaliaNightsong
): Promise<void> => {
  try {
    await connect(Rosa.configs.mongo);

    const embed = new MessageEmbed();
    embed.setTitle("Database Connected!");
    embed.setDescription("Rosalia has prepared the adventurer logs.");

    await Rosa.webhook.send({ embeds: [embed] });
  } catch (error) {
    await rosaErrorHandler(Rosa, "database connection", error);
  }
};
