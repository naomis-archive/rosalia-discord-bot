import { Adventure } from "../../interfaces/game/Adventure";

export const explorations: Adventure[] = [
  {
    type: "exploration",
    name: "Farmlands",
    description:
      "Close to the city, the farmlands are an essential source of food. There might not be much out here, but it's a good place to start!",
    results: {
      monsters: ["Slime", "Rat"],
      treasure: ["Short Sword", "Leather Armor"],
      dungeon: "Spider Nest",
    },
  },
];

export const dungeons: Adventure[] = [
  {
    type: "dungeon",
    name: "Spider Nest",
    description:
      "You found a small cave near a local farm. Filled with webbing, you get the sense that something lurks within.",
    results: {
      monsters: ["Spider"],
      treasure: ["Spider Silk"],
    },
  },
];
