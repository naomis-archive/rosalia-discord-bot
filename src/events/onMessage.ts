import { Message } from "discord.js";

import { CommandList } from "../commands/_CommandList";

/**
 * Handles the messageCreate event from discord.
 *
 * @param {Message} message The message object.
 */
export const onMessage = async (message: Message): Promise<void> => {
  if (!message.content.startsWith("rosa!") || message.author.bot) {
    return;
  }

  for (const Command of CommandList) {
    if (message.content.startsWith(`rosa!${Command.name}`)) {
      await Command.run(message);
      break;
    }
  }
};
