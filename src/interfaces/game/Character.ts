import { Document } from "mongoose";

export interface Character extends Document {
  discordId: string;
  name: string;
  description: string;
  race: string;
  gender: string;
  stats: {
    attack: number;
    defence: number;
    magic: number;
    health: number;
    mana: number;
  };
  experience: {
    level: number;
    xp: number;
  };
  equipment: {
    mainHand: string;
    offHand: string;
    armor: string;
    helmet: string;
    accessory: string;
  };
  inventory: {
    equippable: string[];
    consumable: string[];
    sellable: string[];
    gold: number;
    backpack: number; // how many items the adventurer can carry
  };
  adventure: {
    areas: string[];
    dungeons: string[];
    cooldown: number;
  };
}

export const testCharacter: Omit<Character, keyof Document> = {
  discordId: "1234",
  name: "Test",
  description: "A test character.",
  race: "A test race.",
  gender: "A test gender.",
  stats: {
    attack: 1,
    defence: 1,
    magic: 1,
    health: 1,
    mana: 1,
  },
  experience: {
    level: 1,
    xp: 0,
  },
  equipment: {
    mainHand: "",
    offHand: "",
    armor: "",
    helmet: "",
    accessory: "",
  },
  inventory: {
    equippable: [],
    consumable: [],
    sellable: [],
    gold: 0,
    backpack: 0,
  },
  adventure: {
    areas: [],
    dungeons: [],
    cooldown: 0,
  },
};
