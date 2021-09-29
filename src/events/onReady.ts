import { rosaLogHandler } from "../utils/rosaLogHandler";

/**
 * Handles the ready event from Discord.
 */
export const onReady = (): void => {
  rosaLogHandler.log("debug", "Rosalia is online!");
};
