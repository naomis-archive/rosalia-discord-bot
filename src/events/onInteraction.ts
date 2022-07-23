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
  if (!interaction.isChatInputCommand()) {
    return;
  }
  const target = Rosa.commands.find(
    (c) => c.data.name === interaction.commandName
  );

  if (!target) {
    interaction.reply({
      content:
        "I am not sure how you did it, but that command does not actually exist. I am so sorry!",
    });
    return;
  }

  await target.run(Rosa, interaction);
};
