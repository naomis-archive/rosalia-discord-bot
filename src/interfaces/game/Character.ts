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
