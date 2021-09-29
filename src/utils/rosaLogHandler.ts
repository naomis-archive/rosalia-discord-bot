import { createLogger, format, transports, config } from "winston";

const { combine, timestamp, colorize, printf } = format;

/**
 * Standard log handler, using winston to wrap and format
 * messages. Call with `rosaLogHandler.log(level, message)`.
 *
 * @param {string} level - The log level to use.
 * @param {string} message - The message to log.
 */
export const rosaLogHandler = createLogger({
  levels: config.npm.levels,
  level: "silly",
  transports: [new transports.Console()],
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`)
  ),
  exitOnError: false,
});
