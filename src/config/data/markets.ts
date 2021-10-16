import { Market } from "../../interfaces/game/Market";

export const markets: Market[] = [
  {
    name: "Magic Shoppe",
    key: "magic",
    description:
      "The eccentric shop owner stares at you as you walk in. You feel a little uncomfortable.",
    wares: [
      "Scroll of Attack",
      "Scroll of Defence",
      "Scroll of Magic",
      "Tome of Attack",
      "Tome of Defence",
      "Tome of Magic",
    ],
  },
  {
    name: "Blacksmith",
    key: "blacksmith",
    description:
      "The blacksmith is hard at work at the anvil. She motions for you to browse the weapon rack.",
    wares: ["Short Sword", "Long Sword", "Hand-and-a-Half Sword"],
  },
  {
    name: "Armorer",
    key: "armorer",
    description: `A helmet flies by, nearly hitting you as you walk in. "Sorry!", shouts the armorer.`,
    wares: [
      "Leather Armor",
      "Chainmail",
      "Plate Armor",
      "Leather Helmet",
      "Chainmail Helmet",
      "Plate Helmet",
    ],
  },
  {
    name: "Alchemist",
    key: "alchemist",
    description:
      "A strange smell assaults your nose as you open the door. Multiple cauldrons are scattered around the shoppe, boiling with mysterious fluids.",
    wares: [
      "Small Health Potion",
      "Small Mana Potion",
      "Health Potion",
      "Mana Potion",
      "Large Health Potion",
      "Large Mana Potion",
    ],
  },
];

export const purchasableItems: string[] = markets.map((el) => el.wares).flat();

export const marketChoices: [string, string][] = markets.map((el) => [
  el.name,
  el.key,
]);
