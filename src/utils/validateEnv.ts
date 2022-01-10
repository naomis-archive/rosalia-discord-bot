import { execSync } from "child_process";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";

import { rosaLogHandler } from "./rosaLogHandler";

/**
 * Module to confirm that environment variables have been set. Only checks
 * for existence, not validity.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's client instance.
 * @returns {boolean} True if all values exist.
 */
export const validateEnv = (Rosa: RosaliaNightsong): boolean => {
  if (!process.env.DISCORD_TOKEN) {
    rosaLogHandler.log("debug", "Missing discord token!");
    return false;
  }
  if (!process.env.WH_URL) {
    rosaLogHandler.log("debug", "Missing WH URL!");
    return false;
  }

  if (!process.env.HOME_GUILD) {
    rosaLogHandler.log("debug", "Missing home guild ID!");
    return false;
  }

  if (!process.env.APP_ID) {
    rosaLogHandler.log("debug", "Missing Discord application ID!");
    return false;
  }

  if (!process.env.MONGO_URI) {
    rosaLogHandler.log("debug", "Missing MongoDB URI!");
    return false;
  }

  if (process.env.NODE_ENV !== "production") {
    rosaLogHandler.log("debug", "Running in development mode!");
  }
  Rosa.commitHash = execSync("git rev-parse HEAD").toString().trim();
  Rosa.configs = {
    homeId: process.env.HOME_GUILD,
    token: process.env.DISCORD_TOKEN,
    userId: process.env.APP_ID,
    mongo: process.env.MONGO_URI,
  };
  return true;
};
