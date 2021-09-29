import { readdir } from "fs/promises";
import { join } from "path";

import { Command } from "../interfaces/Command";
import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

import { rosaErrorHandler } from "./rosaErrorHandler";

/**
 * Reads the `/commands` directory and dynamically imports the files,
 * then pushes the imported data to an array.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @returns {Command[]} Array of Command objects representing the imported commands.
 */
export const loadCommands = async (
  Rosa: RosaliaNightsong
): Promise<Command[]> => {
  try {
    const result: Command[] = [];
    const files = await readdir(
      join(process.cwd() + "/prod/commands"),
      "utf-8"
    );
    for (const file of files) {
      const name = file.split(".")[0];
      const mod = await import(join(process.cwd() + `/prod/commands/${file}`));
      result.push(mod[name] as Command);
    }
    return result;
  } catch (err) {
    await rosaErrorHandler(Rosa, "slash command loader", err);
    return [];
  }
};
