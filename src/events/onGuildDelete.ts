import { Guild, MessageEmbed } from "discord.js";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

/**
 * Generates an embed when Rosalia leaves a guild, and
 * sends it to the webhook.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {Guild} guild The guild payload from Discord.
 */
export const onGuildDelete = async (Rosa: RosaliaNightsong, guild: Guild) => {
  try {
    const embed = new MessageEmbed();
    embed.setTitle("Rosalia has returned from an adventure!");
    embed.addField("Guild Name", guild.name);
    embed.addField("Guild ID", guild.id);

    await Rosa.webhook.send({ embeds: [embed] });
  } catch (err) {
    rosaErrorHandler(Rosa, "guild delete handler", err, guild.name);
  }
};
