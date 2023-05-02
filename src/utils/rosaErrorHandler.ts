import * as Sentry from "@sentry/node";
import { EmbedBuilder } from "discord.js";
import { Types } from "mongoose";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

import { customSubstring } from "./customSubstring";
import { rosaLogHandler } from "./rosaLogHandler";

/**
 * Takes the error object generated within the code, passes it to Sentry and logs the
 * information in the console. Then, generates an error ID, builds an error embed, and sends
 * that to the debug hook. Finally, returns the error ID to be passed to the user if applicable.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @param {string} context The string explaining where this error was thrown.
 * @param {unknown} error The standard error object (generated in a catch statement).
 * @param {string | undefined} guild The name of the guild that triggered the issue.
 * @returns {Types.ObjectId} A unique ID for the error.
 */
export const rosaErrorHandler = async (
  Rosa: RosaliaNightsong,
  context: string,
  error: unknown,
  guild?: string
): Promise<Types.ObjectId> => {
  const err = error as Error;
  rosaLogHandler.log("error", `There was an error in the ${context}:`);
  rosaLogHandler.log(
    "error",
    JSON.stringify({ errorMessage: err.message, errorStack: err.stack })
  );

  Sentry.captureException(err);

  const errorId = new Types.ObjectId();
  const errorEmbed = new EmbedBuilder();
  errorEmbed.setTitle(
    `${context} error ${guild ? "in " + guild : "from an unknown source"}.`
  );
  errorEmbed.addFields([
    {
      name: "Stack Trace:",
      value: `\`\`\`\n${customSubstring(err.stack || "null", 1000)}\n\`\`\``,
    },
    {
      name: "Error ID:",
      value: errorId.toHexString(),
    },
  ]);
  errorEmbed.setTimestamp();

  await Rosa.webhook.send({ embeds: [errorEmbed] });

  return errorId;
};
