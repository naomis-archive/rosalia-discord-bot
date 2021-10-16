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
      dungeon: ["Spider Nest", "Abandonded Farm"],
    },
  },
  {
    type: "exploration",
    name: "Forest",
    description:
      "The forest is a dangerous place, but it's a good place to start. There might be monsters out there, but you can always run away!",
    results: {
      monsters: ["Fairy", "Wisp"],
      treasure: ["Long Sword"],
      dungeon: ["Hidden Grove", "Dark Cave"],
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
  {
    type: "dungeon",
    name: "Abandonded Farm",
    description:
      "This farm appears to have been abandoned by the villagers, but you hear some noises around.",
    results: {
      monsters: ["Bandit", "Goblin"],
      treasure: ["Leather Helmet"],
    },
  },
  {
    type: "dungeon",
    name: "Hidden Grove",
    description:
      "Deep within the woods, this small clearing appears to have some sort of magic.",
    results: {
      monsters: ["Treant", "Mandrake"],
      treasure: ["Chainmail", "Chainmail Helmet"],
    },
  },
  {
    type: "dungeon",
    name: "Dark Cave",
    description:
      "You can barely see in here, but this place seems to be inhabited by wizards.",
    results: {
      monsters: ["Wizard"],
      treasure: ["Wizard Robe", "Wizard Hat"],
    },
  },
];
