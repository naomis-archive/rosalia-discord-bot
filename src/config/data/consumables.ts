import { Consumable } from "../../interfaces/game/Consumable";

export const consumables: Consumable[] = [
  {
    type: "consumable",
    name: "Small Health Potion",
    description: [
      "Restores a bit of health",
      "Restores 5 health",
      "Restores very little health",
    ],
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
    description: [
      "Restores a bit of mana",
      "Restores 5 mana",
      "Restores very little mana",
    ],
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
    description: [
      "Restores some health",
      "Restores 10 health",
      "Restores moderate ammount of health",
    ],
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
    description: [
      "Restores some mana",
      "Restores 10 mana",
      "Restores moderate ammount of mana",
    ],
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
    description: [
      "Restores a lot of health",
      "Restores 20 health",
      "Restores plently of health",
    ],
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
    description: [
      "Restores a lot of mana",
      "Restores 20 mana",
      "Restores plenty of mana",
    ],
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
    description: ["Increases attack by 5", "Increase attack a little"],
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
    description: ["Increases defence by 5", "Increase defence a little"],
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
    description: ["Increases magic by 5", "Increase magic a little"],
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
    description: ["Increases attack by 10", "Increases attack a lot"],
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
    description: ["Increases defence by 10", "Increases defence a lot"],
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
    description: ["Increases magic by 10", "Increases magic a lot"],
    effects: [
      {
        stat: "magic",
        bonus: 10,
      },
    ],
    value: 30,
  },
];
