import { model, Schema } from "mongoose";

import { Character } from "../../interfaces/game/Character";

const CharacterSchema = new Schema({
  discordId: String,
  name: String,
  description: String,
  race: String,
  gender: String,
  stats: {
    attack: Number,
    defence: Number,
    magic: Number,
    health: Number,
    mana: Number,
  },
  experience: {
    level: Number,
    xp: Number,
  },
  equipment: {
    mainHand: String,
    offHand: String,
    armor: String,
    helmet: String,
    accessory: String,
  },
  inventory: {
    equippable: Array,
    consumable: Array,
    sellable: Array,
    gold: Number,
    backpack: Number, // how many items the adventurer can carry
  },
  adventure: {
    areas: Array,
    dungeons: Array,
    cooldown: Number,
  },
});

export default model<Character>("character", CharacterSchema);
