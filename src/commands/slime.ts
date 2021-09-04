import { slimeList } from "../data/slimeList";
import { logHandler } from "../helpers/logHandler";
import { CommandInt } from "../interfaces/CommandInt";

export const slime: CommandInt = {
  name: "slime",
  description: "Gives you a slimy nickname~!",
  run: async (message) => {
    try {
      const { channel, member } = message;

      const randomIndex = Math.floor(Math.random() * slimeList.length);
      const randomNoun = slimeList[randomIndex];

      await member?.setNickname(`${randomNoun}slime`);
      await channel.send("You've been slimed!");
    } catch (err) {
      const error = err as Error;
      logHandler.log("error", {
        errorMessage: error.message,
        errorStack: error.stack,
      });
      await message.channel.send("Oh no! My slime cannon broke!");
    }
  },
};
