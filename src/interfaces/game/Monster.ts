export interface Monster {
  name: string;
  description: Array<string>;
  stats: {
    attack: number;
    defence: number;
    magic: number;
    health: number;
    mana: number;
  };
  drops: {
    gold: number;
    exp: number;
    items: string[];
  };
}
