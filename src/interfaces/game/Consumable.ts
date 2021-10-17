export interface Consumable {
  type: "consumable";
  name: string;
  description: Array<string>;
  effects: {
    stat: "attack" | "defence" | "magic" | "health" | "mana";
    bonus: number;
  }[];
  value: number;
}
