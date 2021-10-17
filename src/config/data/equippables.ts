import { Equipment } from "../../interfaces/game/Equipment";

export const equippables: Equipment[] = [
  {
    type: "equippable",
    name: "Short Sword",
    description: ["A small sword, quick but not very powerful.",],
    effects: [
      {
        stat: "attack",
        bonus: 3,
      },
    ],
    slot: "mainHand",
    value: 10,
  },
  {
    type: "equippable",
    name: "Long Sword",
    description: ["A standard sword, decent for most combat.",],
    effects: [
      {
        stat: "attack",
        bonus: 5,
      },
    ],
    slot: "mainHand",
    value: 20,
  },
  {
    type: "equippable",
    name: "Hand-and-a-Half Sword",
    description: ["Very large, can be held in one hand if you're strong enough.",],
    effects: [
      {
        stat: "attack",
        bonus: 10,
      },
    ],
    slot: "mainHand",
    value: 30,
  },
  {
    type: "equippable",
    name: "Leather Armor",
    description: ["A simple leather armor, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 3,
      },
    ],
    slot: "armor",
    value: 10,
  },
  {
    type: "equippable",
    name: "Chainmail",
    description: ["A standard chainmail, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 5,
      },
    ],
    slot: "armor",
    value: 20,
  },
  {
    type: "equippable",
    name: "Plate Armor",
    description: ["A heavy plate armor, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 10,
      },
    ],
    slot: "armor",
    value: 30,
  },
  {
    type: "equippable",
    name: "Leather Helmet",
    description: ["A simple leather helmet, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 2,
      },
    ],
    slot: "helmet",
    value: 5,
  },
  {
    type: "equippable",
    name: "Chainmail Helmet",
    description: ["A standard chainmail helmet, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 4,
      },
    ],
    slot: "helmet",
    value: 10,
  },
  {
    type: "equippable",
    name: "Plate Helmet",
    description: ["A heavy plate helmet, good for defending yourself.",],
    effects: [
      {
        stat: "defence",
        bonus: 8,
      },
    ],
    slot: "helmet",
    value: 15,
  },
  {
    type: "equippable",
    name: "Wizard Robe",
    description: ["An enchanted wizard robe",],
    effects: [
      {
        stat: "magic",
        bonus: 5,
      },
      {
        stat: "defence",
        bonus: 2,
      },
    ],
    slot: "armor",
    value: 20,
  },
  {
    type: "equippable",
    name: "Wizard Hat",
    description: ["An enchanted wizard hat",],
    effects: [
      {
        stat: "magic",
        bonus: 3,
      },
      {
        stat: "defence",
        bonus: 1,
      },
    ],
    slot: "helmet",
    value: 10,
  },
  {
    type: "equippable",
    name: "Wizard Staff",
    description: ["An enchanted wizard staff",],
    effects: [
      {
        stat: "magic",
        bonus: 10,
      },
      {
        stat: "attack",
        bonus: 2,
      },
    ],
    slot: "mainHand",
    value: 30,
  },
];
