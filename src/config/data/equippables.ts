import { Equipment } from "../../interfaces/game/Equipment";

export const equippables: Equipment[] = [
  {
    type: "equippable",
    name: "Short Sword",
    description: ["A small sword, quick but not very powerful.","A small sword lighter than most swords","A light sword. You can swing it easily"],
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
    description: ["A standard sword, decent for most combat.","A regular sword good for combat","Average weighted sword. This can inflict good damage"],
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
    description: ["Very large, can be held in one hand if you're strong enough.","A super long sword which does lots of Damage","Super effective weapon for crushing your opponent"],
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
    description: ["A simple leather armor, good for defending yourself.","A armor made of leather. Provides decent protection","A good defence against most attacks"],
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
    description: ["A standard chainmail, good for defending yourself.","Armor made of chainmail. Provides great protection against knives","A chainmail made of chain"],
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
    description: ["A heavy plate armor, good for defending yourself.","A armor worthy of a Knight. Provides excellent protection","The favorite armor of Knights."],
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
    description: ["A simple leather helmet, good for defending yourself.","Helment made of leather. Provides decent protection","A good way to protect fatal injuries to the head"],
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
    description: ["A standard chainmail helmet, good for defending yourself.","Helmet made of chains. Provides good protection","A good way to protect fatal injuries to the head"],
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
    description: ["A heavy plate helmet, good for defending yourself.","The Helmet of a Knight","A helment that provides excellent protection and also looks cool"],
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
    description: ["An enchanted wizard robe","Encahnted robes of mages.","The standard armor used by mages. It may be cloth but it is encahnted"],
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
    description: ["An enchanted wizard hat","The signature hat of a mage.","Enchanted hat used by mages"],
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
    description: ["An enchanted wizard staff","The best friend of a wizard.","Amplifies magical attacks. Best used by mages"],
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
