import { Monster } from "../../interfaces/game/Monster";

export const monsters: Monster[] = [
  {
    name: "Slime",
    description: ["A small blue slime.",],
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
    description: ["A slightly large rat.",],
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
    description: ["A large spider.",],
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
  {
    name: "Bandit",
    description: ["A less than polite person.",],
    stats: {
      attack: 10,
      defence: 5,
      magic: 3,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 25,
      exp: 30,
      items: ["Short Sword", "Small Health Potion"],
    },
  },
  {
    name: "Goblin",
    description: ["A cackling goblin.",],
    stats: {
      attack: 7,
      defence: 5,
      magic: 5,
      health: 25,
      mana: 10,
    },
    drops: {
      gold: 20,
      exp: 20,
      items: ["Goblin Horn"],
    },
  },
  {
    name: "Fairy",
    description: ["A beautiful fairy.",],
    stats: {
      attack: 3,
      defence: 3,
      magic: 10,
      health: 10,
      mana: 20,
    },
    drops: {
      gold: 5,
      exp: 15,
      items: ["Fairy Dust", "Fairy Wing"],
    },
  },
  {
    name: "Wisp",
    description: ["A floating ball of light",],
    stats: {
      attack: 1,
      defence: 1,
      magic: 15,
      health: 20,
      mana: 30,
    },
    drops: {
      gold: 5,
      exp: 20,
      items: ["Small Health Potion", "Small Mana Potion"],
    },
  },
  {
    name: "Treant",
    description: ["A walking, talking, attacking tree",],
    stats: {
      attack: 10,
      defence: 20,
      magic: 5,
      health: 50,
      mana: 0,
    },
    drops: {
      gold: 10,
      exp: 30,
      items: ["Treant Root", "Bark Strips"],
    },
  },
  {
    name: "Mandrake",
    description: ["A large, poisonous plant",],
    stats: {
      attack: 15,
      defence: 15,
      magic: 10,
      health: 25,
      mana: 25,
    },
    drops: {
      gold: 10,
      exp: 30,
      items: ["Mandrake Root"],
    },
  },
  {
    name: "Wizard",
    description: ["A wizard with a staff",],
    stats: {
      attack: 5,
      defence: 10,
      magic: 20,
      health: 20,
      mana: 50,
    },
    drops: {
      gold: 30,
      exp: 20,
      items: ["Wizard Staff"],
    },
  },
];
