import { connect } from "mongoose";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";

/**
 * Instantiates the database connection.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 */
export const connectDatabase = async (
  Rosa: RosaliaNightsong
): Promise<void> => {
  try {
    await connect(Rosa.configs.mongo);

    await Rosa.webhook.send({ content: "Database connected!" });
  } catch (error) {
    await rosaErrorHandler(Rosa, "database connection", error);
  }
};
