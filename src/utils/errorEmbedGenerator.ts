import { EmbedBuilder } from "discord.js";
import { Types } from "mongoose";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

/**
 * Generates an embed containing a unique ID for an error and instructions for
 * joining the support server and requesting assistance.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @param {string} commandName The name of the command that generated the error.
 * @param {Types.ObjectId} errorId The unique ID for the error.
 * @returns {EmbedBuilder} The Discord embed containing the information.
 */
export const errorEmbedGenerator = (
  Rosa: RosaliaNightsong,
  commandName: string,
  errorId: Types.ObjectId
): EmbedBuilder => {
  const errorEmbed = new EmbedBuilder();
  errorEmbed.setTitle(`Unknown Error`);
  errorEmbed.setDescription(`The ${commandName} seems to have broken.`);
  errorEmbed.addFields([
    {
      name: "What happened?",
      value: "Something went wrong with this command.",
    },
    {
      name: "Did I do something wrong?",
      value:
        "Errors can happen for a number of reasons. It could be an issue with the permissions you gave me, the code that powers me, or a number of other possibilities.",
    },
    {
      name: "So what can I do to fix it?",
      value:
        "If you need assistance with this feature, please [join our support server](https://chat.nhcarrigan.com). Once there, give this ErrorID to the support team to investigate.",
    },
    {
      name: "Error ID:",
      value: errorId.toHexString(),
    },
  ]);

  errorEmbed.setFooter({
    text: "Having fun? Donate: https://donate.nhcarrigan.com",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });
  errorEmbed.setTimestamp();
  return errorEmbed;
};
