import { model, Schema } from "mongoose";

import { Character } from "../../interfaces/game/Character";

const CharacterSchema = new Schema({
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
    mainHand: {
      type: Object,
      default: null,
    },
    offHand: {
      type: Object,
      default: null,
    },
    armor: {
      type: Object,
      default: null,
    },
    helmet: {
      type: Object,
      default: null,
    },
    accessory: {
      type: Object,
      default: null,
    },
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
