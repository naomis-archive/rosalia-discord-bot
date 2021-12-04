import { Guild, MessageEmbed } from "discord.js";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

/**
 * Generates an embed when Rosalia joins a new guild, and
 * sends it to the webhook.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {Guild} guild The guild payload from Discord.
 */
export const onGuildCreate = async (Rosa: RosaliaNightsong, guild: Guild) => {
  try {
    const embed = new MessageEmbed();
    embed.setTitle("Rosalia has gone on a new adventure!");
    embed.addField("Guild Name", guild.name);
    embed.addField("Guild ID", guild.id);
    const owner = await guild.fetchOwner();
    embed.addField("Guild Owner", owner.user.tag);
    embed.addField("Guild Owner ID", owner.id);

    await Rosa.webhook.send({ embeds: [embed] });
  } catch (err) {
    rosaErrorHandler(Rosa, "guild create handler", err, guild.name);
  }
};
