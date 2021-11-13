import { readFile } from "fs/promises";
import http from "http";
import https from "https";

import express from "express";

import { RosaliaNightsong } from "../interfaces/RosaliaNightsong";
import { rosaErrorHandler } from "../utils/rosaErrorHandler";
import { rosaLogHandler } from "../utils/rosaLogHandler";

/**
 * Instantiates an express server and adds an endpoint for uptime monitoring.
 *
 * @param {RosaliaNightsong} Rosa Rosalia's Discord instance.
 * @returns {boolean} Whether or not the server was successfully created.
 */
export const createServer = async (
  Rosa: RosaliaNightsong
): Promise<boolean> => {
  try {
    const HTTPEndpoint = express();

    HTTPEndpoint.use("/", (_, res) => {
      res.status(200).send("Ping!");
    });

    const httpPort = 1080;

    const httpServer = http.createServer(HTTPEndpoint);

    httpServer.listen(httpPort, () => {
      rosaLogHandler.log("http", `http server is live on port ${httpPort}`);
    });

    if (process.env.NODE_ENV === "production") {
      const privateKey = await readFile(
        "/etc/letsencrypt/live/bot.rosalianightsong.com/privkey.pem",
        "utf8"
      );
      const certificate = await readFile(
        "/etc/letsencrypt/live/bot.rosalianightsong.com/cert.pem",
        "utf8"
      );
      const ca = await readFile(
        "/etc/letsencrypt/live/bot.rosalianightsong.com/chain.pem",
        "utf8"
      );

      const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
      };

      const httpsServer = https.createServer(credentials, HTTPEndpoint);
      httpsServer.listen(1443, () => {
        rosaLogHandler.log("http", "https server is live on port 443");
      });
    }
    return true;
  } catch (err) {
    rosaErrorHandler(Rosa, "create server", err);
    return false;
  }
};
