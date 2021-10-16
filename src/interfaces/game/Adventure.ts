export interface Adventure {
  type: "exploration" | "dungeon";
  name: string;
  description: string;
  results: {
    monsters: string[];
    treasure: string[];
    dungeon?: string[]; // only if type is exploration
  };
}
