import { Consumable } from "./Consumable";
import { Equipment } from "./Equipment";
import { Monster } from "./Monster";
import { Sellable } from "./Sellable";

export interface Adventure {
  type: "exploration" | "dungeon";
  name: string;
  description: string;
  results: {
    monsters: Monster[];
    treasure: Array<Equipment | Consumable | Sellable>;
    dungeon?: string; // only if type is exploration
  };
}
