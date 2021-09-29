import { Document } from "mongoose";

import { Consumable } from "./Consumable";
import { Equipment } from "./Equipment";
import { Sellable } from "./Sellable";

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
    mainHand: Equipment | null;
    offHand: Equipment | null;
    armor: Equipment | null;
    helmet: Equipment | null;
    accessory: Equipment | null;
  };
  inventory: {
    equippable: [Equipment];
    consumable: [Consumable];
    sellable: [Sellable];
    gold: number;
    backpack: number; // how many items the adventurer can carry
  };
  adventure: {
    areas: string[];
    dungeons: string[];
    cooldown: number;
  };
}
