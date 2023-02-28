import { EmbedBuilder } from "discord.js";

/**
 * Takes a milliseconds value and parses it into
 * a Discord embed. Used for the "on cooldown"
 * responses.
 *
 * @param {number} cooldown The user's remaining cooldown, in ms.
 * @returns {EmbedBuilder} A Discord message embed.
 */
export const showCooldown = (cooldown: number): EmbedBuilder => {
  const seconds = Math.round(cooldown / 1000);
  const days = seconds >= 86400 ? Math.floor(seconds / 86400) : 0;
  const hours =
    seconds >= 3600 ? Math.floor((seconds - days * 86400) / 3600) : 0;
  const minutes =
    seconds >= 60
      ? Math.floor((seconds - days * 86400 - hours * 3600) / 60)
      : 0;
  const secondsRemain = seconds - days * 86400 - hours * 3600 - minutes * 60;

  const embed = new EmbedBuilder();
  embed.setTitle("You are busy!");
  embed.setDescription("You are still occupied with your last activity.");
  embed.addFields([
    {
      name: "Time remaining:",
      value: `${days}d ${hours}h ${minutes}m ${secondsRemain}s`,
    },
  ]);
  embed.setFooter({
    text: "Join our server: https://chat.naomi.lgbt",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });
  return embed;
};
