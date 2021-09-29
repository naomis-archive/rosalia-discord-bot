import { Interaction } from "discord.js";

/**
 * Handles the interactionCreate event from discord.
 *
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const onInteraction = async (
  interaction: Interaction
): Promise<void> => {
  if (!interaction.isCommand()) {
    return;
  }
};
