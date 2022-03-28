import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

/**
 * Aggregates Rosalia's guild count, member counts, and
 * command counts.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @returns {object} An object representing the aggregated counts.
 */
export const getCounts = (Rosa: RosaliaNightsong): Record<string, number> => {
  const guildCount = Rosa.guilds.cache.size;
  let memberCount = 0;
  let commandCount = 0;

  Rosa.guilds.cache.forEach((guild) => {
    memberCount += guild.memberCount;
  });

  Rosa.commands.forEach((command) => {
    const parsed = command.data.toJSON().options;
    parsed?.forEach((option) => {
      // subcommands are type 1
      if (option.type === 1) {
        commandCount++;
      }
    });
  });

  return {
    commands: commandCount,
    guilds: guildCount,
    members: memberCount,
  };
};
