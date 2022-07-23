import { Guild, EmbedBuilder } from "discord.js";

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
    const owner = await guild.fetchOwner();

    const embed = new EmbedBuilder();
    embed.setTitle("Rosalia has gone on a new adventure!");
    embed.addFields([
      { name: "Guild Name", value: guild.name },
      { name: "Guild ID", value: guild.id },
      { name: "Guild Owner", value: owner.user.tag },
      { name: "Guild Owner ID", value: owner.id },
    ]);

    await Rosa.webhook.send({ embeds: [embed] });
  } catch (err) {
    rosaErrorHandler(Rosa, "guild create handler", err, guild.name);
  }
};
