import { Monster } from "../../interfaces/game/Monster";

export const monsters: Monster[] = [
  {
    name: "Slime",
    description: "A small blue slime.",
    stats: {
      attack: 1,
      defence: 1,
      magic: 1,
      health: 10,
      mana: 0,
    },
    drops: {
      gold: 1,
      exp: 5,
      items: ["Slime Jelly", "Small Health Potion"],
    },
  },
  {
    name: "Rat",
    description: "A slightly large rat.",
    stats: {
      attack: 2,
      defence: 2,
      magic: 1,
      health: 15,
      mana: 0,
    },
    drops: {
      gold: 3,
      exp: 7,
      items: ["Rat Tail"],
    },
  },
  {
    name: "Spider",
    description: "A large spider.",
    stats: {
      attack: 5,
      defence: 5,
      magic: 1,
      health: 25,
      mana: 0,
    },
    drops: {
      gold: 10,
      exp: 15,
      items: ["Spider Silk"],
    },
  },
];
