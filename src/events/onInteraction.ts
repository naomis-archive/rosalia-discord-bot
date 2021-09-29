import { Interaction } from "discord.js";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

/**
 * Handles the interactionCreate event from discord.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const onInteraction = async (
  Rosa: RosaliaNightsong,
  interaction: Interaction
): Promise<void> => {
  if (!interaction.isCommand()) {
    return;
  }
};
