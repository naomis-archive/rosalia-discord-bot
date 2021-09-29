export interface Equipment {
  type: "equipment";
  name: string;
  description: string;
  effects: {
    stat: "attack" | "defence" | "magic" | "health" | "mana";
    bonus: number;
  }[];
  slot: "mainHand" | "offHand" | "armor" | "helmet" | "accessory";
  value: number;
}
