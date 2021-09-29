import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaLogHandler } from "../utils/rosaLogHandler";

/**
 * Handles the ready event from Discord.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 */
export const onReady = async (Rosa: RosaliaNightsong): Promise<void> => {
  rosaLogHandler.log("debug", "Rosalia is online!");

  await Rosa.webhook.send(
    `Rosalia is online running version ${process.env.npm_package_version}`
  );
};
