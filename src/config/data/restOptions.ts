import { APIApplicationCommandOptionChoice } from "discord.js";

export const restOptions: Record<
  Room,
  { health: number; mana: number; gold: number }
> = {
  terrible: {
    health: 0,
    mana: 0,
    gold: 0,
  },
  poor: {
    health: 5,
    mana: 0,
    gold: 10,
  },
  standard: {
    health: 10,
    mana: 5,
    gold: 25,
  },
  nice: {
    health: 20,
    mana: 10,
    gold: 50,
  },
  extravagant: {
    health: 50,
    mana: 25,
    gold: 100,
  },
};

export type Room = "terrible" | "poor" | "standard" | "nice" | "extravagant";

export const restChoices: APIApplicationCommandOptionChoice<Room>[] = [
  { name: "Sleep on the street (0 gold)", value: "terrible" },
  {
    name: "Rent a bed in the common room of the local tavern (10 gold)",
    value: "poor",
  },
  { name: "Rent a standard room at the inn. (25 gold)", value: "standard" },
  {
    name: "Rent a nicer room from the noble quarters. (50 gold)",
    value: "nice",
  },
  {
    name: "Find a fancy room in the royal district. (100 gold)",
    value: "extravagant",
  },
];
