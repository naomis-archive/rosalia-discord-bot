import { Monster } from "../../interfaces/game/Monster";

export const monsters: Monster[] = [
  {
    name: "Slime",
    description: [
      "A small blue slime.",
      "A small rock slime.",
      "A small fire slime.",
      "A small corrosive slime.",
      "A small dirt eating slime.",
      "A small water slime.",
    ],
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
    description: [
      "A slightly large rat.",
      "A rat larger than normal",
      "A ferocious looking rat",
    ],
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
    description: [
      "A large spider.",
      "A spider that can haunt your dreams",
      "A monsterous spider making eerie sounds",
    ],
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
    description: [
      "A less than polite person.",
      "A common criminal",
      "A human who will always want your coin by questionable methods",
    ],
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
    description: [
      "A cackling goblin.",
      "A small green goblin",
      "A goblin: These creatures can be ferocious",
    ],
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
    description: [
      "A beautiful fairy.",
      "A magicial being of nature",
      "A evil looking fairy",
    ],
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
    description: [
      "A floating ball of light",
      "A green ball of light",
      "A mysterious ball of light",
      "A magical ball of light",
    ],
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
    description: [
      "A walking, talking, attacking tree",
      "A walking tree. A great way to get some combat exercise and wood",
      "A walking tree? This ought to have some medicinal roots",
    ],
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
    description: [
      "A large, poisonous plant",
      "A poisonous plant usable for alchemy",
      "Warning: Do not eat Mandrake or you may not like the effects",
    ],
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
    description: [
      "A wizard with a staff",
      "A Wizard capable of attack magic",
      "A wizard capable of dark magic",
    ],
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
