import { REST } from "@discordjs/rest";
import {
  Routes,
  RESTPostAPIApplicationCommandsJSONBody,
} from "discord-api-types/v9";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

import { rosaErrorHandler } from "./rosaErrorHandler";
import { rosaLogHandler } from "./rosaLogHandler";

/**
 * Takes both the commands and contexts, parses the `data` properties as needed,
 * and builds an array of all command data. Then, posts the data to the Discord endpoint
 * for registering commands.
 *
 * Will register commands globally if in a production environment, otherwise defaults to the
 * home guild only.
 *
 * @param {RosaliaNightsong} Rosa Rosa's Discord instance.
 * @returns {boolean} True if the commands were registered, false on error.
 */
export const registerCommands = async (
  Rosa: RosaliaNightsong
): Promise<boolean> => {
  try {
    const rest = new REST({ version: "9" }).setToken(Rosa.configs.token);

    const commandData: RESTPostAPIApplicationCommandsJSONBody[] = [];

    Rosa.commands.forEach((command) => {
      const data = command.data.toJSON();
      data.options?.sort((a, b) => a.name.localeCompare(b.name));
      commandData.push(data);
    });
    if (process.env.NODE_ENV === "production") {
      rosaLogHandler.log("debug", "registering commands globally!");
      await rest.put(Routes.applicationCommands(Rosa.configs.userId), {
        body: commandData,
      });
    } else {
      rosaLogHandler.log("debug", "registering to home guild only");
      await rest.put(
        Routes.applicationGuildCommands(
          Rosa.configs.userId,
          Rosa.configs.homeId
        ),
        { body: commandData }
      );
    }
    return true;
  } catch (err) {
    await rosaErrorHandler(Rosa, "slash command register", err);
    return false;
  }
};
