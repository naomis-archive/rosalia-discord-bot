import { logHandler } from "../helpers/logHandler";

/**
 * Handles the ready event from Discord.
 */
export const onReady = (): void => {
  logHandler.log("debug", "Rosalia is online!");
};
