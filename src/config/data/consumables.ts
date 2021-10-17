import { Consumable } from "../../interfaces/game/Consumable";

export const consumables: Consumable[] = [
  {
    type: "consumable",
    name: "Small Health Potion",
    description: ["Restores a bit of health",],
    effects: [
      {
        stat: "health",
        bonus: 5,
      },
    ],
    value: 5,
  },
  {
    type: "consumable",
    name: "Small Mana Potion",
    description: ["Restores a bit of mana",],
    effects: [
      {
        stat: "mana",
        bonus: 5,
      },
    ],
    value: 5,
  },
  {
    type: "consumable",
    name: "Health Potion",
    description: ["Restores some health",],
    effects: [
      {
        stat: "health",
        bonus: 10,
      },
    ],
    value: 10,
  },
  {
    type: "consumable",
    name: "Mana Potion",
    description: ["Restores some mana",],
    effects: [
      {
        stat: "mana",
        bonus: 10,
      },
    ],
    value: 10,
  },
  {
    type: "consumable",
    name: "Large Health Potion",
    description: ["Restores a lot of health",],
    effects: [
      {
        stat: "health",
        bonus: 20,
      },
    ],
    value: 20,
  },
  {
    type: "consumable",
    name: "Large Mana Potion",
    description: ["Restores a lot of mana",],
    effects: [
      {
        stat: "mana",
        bonus: 20,
      },
    ],
    value: 20,
  },
  {
    type: "consumable",
    name: "Scroll of Attack",
    description: ["Increases attack by 5",],
    effects: [
      {
        stat: "attack",
        bonus: 5,
      },
    ],
    value: 20,
  },
  {
    type: "consumable",
    name: "Scroll of Defence",
    description: ["Increases defence by 5",],
    effects: [
      {
        stat: "defence",
        bonus: 5,
      },
    ],
    value: 20,
  },
  {
    type: "consumable",
    name: "Scroll of Magic",
    description: ["Increases magic by 5",],
    effects: [
      {
        stat: "magic",
        bonus: 5,
      },
    ],
    value: 20,
  },
  {
    type: "consumable",
    name: "Tome of Attack",
    description: ["Increases attack by 10",],
    effects: [
      {
        stat: "attack",
        bonus: 10,
      },
    ],
    value: 30,
  },
  {
    type: "consumable",
    name: "Tome of Defence",
    description: ["Increases defence by 10",],
    effects: [
      {
        stat: "defence",
        bonus: 10,
      },
    ],
    value: 30,
  },
  {
    type: "consumable",
    name: "Tome of Magic",
    description: ["Increases magic by 10",],
    effects: [
      {
        stat: "magic",
        bonus: 10,
      },
    ],
    value: 30,
  },
];
