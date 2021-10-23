import { Monster } from "../../interfaces/game/Monster";

export const monsters: Monster[] = [
  {
    name: "Slime",
    description: [
      "A small blue slime.",
      "A small rock slime.",
      "A small fire slime.",
      "A small corrosive slime.",
      "A small dirt eating slime.",
      "A small water slime.",
    ],
    stats: {
      attack: 1,
      defence: 1,
      magic: 1,
      health: 10,
      mana: 0,
    },
    drops: {
      gold: 1,
      exp: 5,
      items: ["Slime Jelly", "Small Health Potion"],
    },
  },
  {
    name: "Rat",
    description: [
      "A slightly large rat.",
      "A rat larger than normal",
      "A ferocious looking rat",
    ],
    stats: {
      attack: 2,
      defence: 2,
      magic: 1,
      health: 15,
      mana: 0,
    },
    drops: {
      gold: 3,
      exp: 7,
      items: ["Rat Tail"],
    },
  },
  {
    name: "Spider",
    description: [
      "A large spider.",
      "A spider that can haunt your dreams",
      "A monsterous spider making eerie sounds",
    ],
    stats: {
      attack: 5,
      defence: 5,
      magic: 1,
      health: 25,
      mana: 0,
    },
    drops: {
      gold: 10,
      exp: 15,
      items: ["Spider Silk"],
    },
  },
  {
    name: "Bandit",
    description: [
      "A less than polite person.",
      "A common criminal",
      "A human who will always want your coin by questionable methods",
    ],
    stats: {
      attack: 10,
      defence: 5,
      magic: 3,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 25,
      exp: 30,
      items: ["Short Sword", "Small Health Potion"],
    },
  },
  {
    name: "Goblin",
    description: [
      "A cackling goblin.",
      "A small green goblin",
      "A goblin: These creatures can be ferocious",
    ],
    stats: {
      attack: 7,
      defence: 5,
      magic: 5,
      health: 25,
      mana: 10,
    },
    drops: {
      gold: 20,
      exp: 20,
      items: ["Goblin Horn"],
    },
  },
  {
    name: "Fairy",
    description: [
      "A beautiful fairy.",
      "A magicial being of nature",
      "A evil looking fairy",
    ],
    stats: {
      attack: 3,
      defence: 3,
      magic: 10,
      health: 10,
      mana: 20,
    },
    drops: {
      gold: 5,
      exp: 15,
      items: ["Fairy Dust", "Fairy Wing"],
    },
  },
  {
    name: "Wisp",
    description: [
      "A floating ball of light",
      "A green ball of light",
      "A mysterious ball of light",
      "A magical ball of light",
    ],
    stats: {
      attack: 1,
      defence: 1,
      magic: 15,
      health: 20,
      mana: 30,
    },
    drops: {
      gold: 5,
      exp: 20,
      items: ["Small Health Potion", "Small Mana Potion"],
    },
  },
  {
    name: "Treant",
    description: [
      "A walking, talking, attacking tree",
      "A walking tree. A great way to get some combat exercise and wood",
      "A walking tree? This ought to have some medicinal roots",
    ],
    stats: {
      attack: 10,
      defence: 20,
      magic: 5,
      health: 50,
      mana: 0,
    },
    drops: {
      gold: 10,
      exp: 30,
      items: ["Treant Root", "Bark Strips"],
    },
  },
  {
    name: "Mandrake",
    description: [
      "A large, poisonous plant",
      "A poisonous plant usable for alchemy",
      "Warning: Do not eat Mandrake or you may not like the effects",
    ],
    stats: {
      attack: 15,
      defence: 15,
      magic: 10,
      health: 25,
      mana: 25,
    },
    drops: {
      gold: 10,
      exp: 30,
      items: ["Mandrake Root"],
    },
  },
  {
    name: "Wizard",
    description: [
      "A wizard with a staff",
      "A Wizard capable of attack magic",
      "A wizard capable of dark magic",
    ],
    stats: {
      attack: 5,
      defence: 10,
      magic: 20,
      health: 20,
      mana: 50,
    },
    drops: {
      gold: 30,
      exp: 20,
      items: ["Wizard Staff"],
    },
  },
  {
    name:"Troll" ,
    description: [ ],
    stats: {
      attack: 15 ,
      defence: 10,
      magic: 1,
      health: 50,
      mana: 0,
    },
    drops: {
      gold: 40 ,
      exp: 35,
      items: ["Hunting Bow","Troll Fat","Arrows"],
    },
  },
  {
    name:"Yeti" ,
    description: [ ],
    stats: {
      attack:13 ,
      defence:15 ,
      magic:1 ,
      health:70 ,
      mana: 0,
    },
    drops: {
      gold:60 ,
      exp:40 ,
      items: ["Yeti Toe","Yeti Tooth","Short Sword"],
    },
  },
  {
    name: "Bear",
    description: [ ],
    stats: {
      attack: 10,
      defence: 8,
      magic:1 ,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 15,
      exp: 25,
      items: ["Bear claw","Bear Pelt","Bear Meat"],
    },
  },
  {
    name:"Ghost" ,
    description: [ ],
    stats: {
      attack: 6,
      defence: 4,
      magic: 4,
      health: 10 ,
      mana: 25,
    },
    drops: {
      gold: 10,
      exp: 15,
      items: ["Ghost dust","Broken Crystal","Spiritual residue"],
    },
  },
  {
    name: "Zombie",
    description: [ ],
    stats: {
      attack: 12,
      defence:8 ,
      magic: 1,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 25,
      exp:30 ,
      items: ["Zombie Fang","Corrupted Blood","Zombie Hand"],
    },
  },
  {
    name:"specter" ,
    description: [ ],
    stats: {
      attack: 15,
      defence: 10,
      magic: 6,
      health: 35,
      mana: 80,
    },
    drops: {
      gold: 35,
      exp: 40,
      items: ["Broken Scythe","Broke Crystal","Spiritual Residue"],
    },
  },
  {
    name:"Giant Insectoid" ,
    description: [ ],
    stats: {
      attack: 20,
      defence:10 ,
      magic: 1,
      health: 30,
      mana:0 ,
    },
    drops: {
      gold: 15,
      exp: 20,
      items: ["Giant Insect Wings","Giant Insect Carcass","Arrows"],
    },
  },
  {
    name:"Insect Queen" ,
    description: [ ],
    stats: {
      attack: 30,
      defence: 15,
      magic:4 ,
      health:45 ,
      mana: 35,
    },
    drops: {
      gold: 30,
      exp: 50,
      items: ["Long Sword","Leather Armor","Giant Insect Carcass"],
    },
  },
  {
    name:"Elemental Summon" ,
    description: [ ],
    stats: {
      attack: 20,
      defence: 10 ,
      magic: 15,
      health: 35,
      mana: 100,
    },
    drops: {
      gold: 30,
      exp: 40,
      items: ["Elemental Dust","Hand-and-a-Half Sword","Tome of Magic"],
    },
  },
  {
    name:"Boar" ,
    description: [ ],
    stats: {
      attack: 10,
      defence: 6,
      magic: 1,
      health: 20,
      mana: 0,
    },
    drops: {
      gold: 15,
      exp: 10,
      items: ["Boar Meat","Boar Fang"],
    },
  },
  {
    name:"Bat" ,
    description: [ ],
    stats: {
      attack: 5,
      defence: 5,
      magic: 1,
      health: 15,
      mana: 0,
    },
    drops: {
      gold: 5,
      exp: 5,
      items: ["Bat Fang","Bat wings","Leather Armor"],
    },
  },
  {
    name:"Golem" ,
    description: [ ],
    stats: {
      attack: 25,
      defence: 15,
      magic: 1,
      health: 50,
      mana: 0,
    },
    drops: {
      gold: 35,
      exp: 25,
      items: ["Golem Stones","Short Sword","Hunting Bow"],
    },
  },
  {
    name:"Undead Animal" ,
    description: [ ],
    stats: {
      attack: 15,
      defence: 5,
      magic: 1,
      health: 20,
      mana: 0,
    },
    drops: {
      gold: 15,
      exp: 10,
      items: ["Animal Carcass","Rotten Meat","Arrows"],
    },
  },
  {
    name:"Plunderer" ,
    description: [ ],
    stats: {
      attack: 25,
      defence: 15,
      magic: 5,
      health: 35,
      mana: 20,
    },
    drops: {
      gold: 40,
      exp: 20,
      items: ["Long Sword","chainmail","Arrows","Hunting Bow"],
    },
  },
  {
    name:"Guardian Spirit" ,
    description: [ ],
    stats: {
      attack: 30,
      defence: 20,
      magic: 30,
      health: 65,
      mana: 120,
    },
    drops: {
      gold: 60,
      exp: 45,
      items: ["Tome of Attack","Hand-and-a-Half Sword","Guardian Dust"],
    },
  },

];
