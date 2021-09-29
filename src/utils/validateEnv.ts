import { rosaLogHandler } from "./rosaLogHandler";

/**
 * Module to confirm that environment variables have been set. Only checks
 * for existence, not validity.
 *
 * @returns {boolean} True if all values exist.
 */
export const validateEnv = (): boolean => {
  if (!process.env.DISCORD_TOKEN) {
    rosaLogHandler.log("debug", "Missing discord token!");
    return false;
  }
  if (!process.env.WH_URL) {
    rosaLogHandler.log("debug", "Missing WH URL!");
    return false;
  }
  return true;
};
