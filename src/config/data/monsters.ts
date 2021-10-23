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
    name: "Troll",
    description: [
      " A huge, feirce looking troll. It seems to be quite powerful.",
      "It's a Troll. It might be a difficult battle",
      "Trolls inhabit the mountians. It might be a dangerous beast",
    ],
    stats: {
      attack: 15,
      defence: 10,
      magic: 1,
      health: 50,
      mana: 0,
    },
    drops: {
      gold: 40,
      exp: 35,
      items: ["Hunting Bow", "Troll Fat", "Arrows"],
    },
  },
  {
    name: "Yeti",
    description: [
      "A large, bipedal ape-like creature that is covered with brown. This is a Yeti",
      "A large creature covered with white hair. Seems like a yeti",
    ],
    stats: {
      attack: 13,
      defence: 15,
      magic: 1,
      health: 70,
      mana: 0,
    },
    drops: {
      gold: 60,
      exp: 40,
      items: ["Yeti Toe", "Yeti Tooth", "Short Sword"],
    },
  },
  {
    name: "Bear",
    description: [
      "A huge brown bear with sharp claws.",
      "This bear seems to want to attack you.",
      "A Bear! You have heard that bear's fetch high prices.",
    ],
    stats: {
      attack: 10,
      defence: 8,
      magic: 1,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 15,
      exp: 25,
      items: ["Bear claw", "Bear Pelt", "Bear Meat"],
    },
  },
  {
    name: "Ghost",
    description: [
      "An apparition of a dead person. It looks freaky.",
      "A white apparition that seems to want to attack you.",
    ],
    stats: {
      attack: 6,
      defence: 4,
      magic: 4,
      health: 10,
      mana: 25,
    },
    drops: {
      gold: 10,
      exp: 15,
      items: ["Ghost dust", "Broken Crystal", "Spiritual residue"],
    },
  },
  {
    name: "Zombie",
    description: [
      "Seems certain conditions have caused this person to turn into a zombie.",
      "A zombie which attacks everything in sight indiscriminatly",
    ],
    stats: {
      attack: 12,
      defence: 8,
      magic: 1,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 25,
      exp: 30,
      items: ["Zombie Fang", "Corrupted Blood", "Zombie Hand"],
    },
  },
  {
    name: "specter",
    description: [
      "You see a disembodied specter with a scythe in hand.",
      "A specter with a scythe in hand. Almost looks like death incarnate.",
    ],
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
      items: ["Broken Scythe", "Broke Crystal", "Spiritual Residue"],
    },
  },
  {
    name: "Giant Insectoid",
    description: [
      "A giant insect-like creature that seems aggressive.",
      "A aggressive, giant creature that almost looks like a insect",
    ],
    stats: {
      attack: 20,
      defence: 10,
      magic: 1,
      health: 30,
      mana: 0,
    },
    drops: {
      gold: 15,
      exp: 20,
      items: ["Giant Insect Wings", "Giant Insect Carcass", "Arrows"],
    },
  },
  {
    name: "Insect Queen",
    description: [
      "A large insect with shiny wings. This seems to be the queen of the insectoids",
      "A giant insect queen with large shiny wings.",
    ],
    stats: {
      attack: 30,
      defence: 15,
      magic: 4,
      health: 45,
      mana: 35,
    },
    drops: {
      gold: 30,
      exp: 50,
      items: ["Long Sword", "Leather Armor", "Giant Insect Carcass"],
    },
  },
  {
    name: "Elemental Summon",
    description: [
      "A fire elemental summon that has control of fire magic",
      "A earth elemental summon that has control of earth magic",
      "A water elemental summon that has control of water magic",
      "A wind elemental summon that has control of wind magic",
    ],
    stats: {
      attack: 20,
      defence: 10,
      magic: 15,
      health: 35,
      mana: 100,
    },
    drops: {
      gold: 30,
      exp: 40,
      items: ["Elemental Dust", "Hand-and-a-Half Sword", "Tome of Magic"],
    },
  },
  {
    name: "Boar",
    description: [
      "A wild boar. This are pretty comman animals",
      "A common wild boar with fangs.",
    ],
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
      items: ["Boar Meat", "Boar Fang"],
    },
  },
  {
    name: "Bat",
    description: [
      "A dark dwelling creature called a bat.",
      "A unsually large bat with deadly fangs",
    ],
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
      items: ["Bat Fang", "Bat wings", "Leather Armor"],
    },
  },
  {
    name: "Golem",
    description: [
      "A giant rock creature that can destroy anything in it's path.",
      "A giant golem with a high defense.",
    ],
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
      items: ["Golem Stones", "Short Sword", "Hunting Bow"],
    },
  },
  {
    name: "Undead Animal",
    description: [
      "A animal that seems to have died and brought back to life",
      "Wicked magic has caused this animal to come back to life. It does not seem to have it' senses and attack everything in sight.",
    ],
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
      items: ["Animal Carcass", "Rotten Meat", "Arrows"],
    },
  },
  {
    name: "Plunderer",
    description: [
      "A plunderer looting the spoils. He attacks you on sight in hopes to seal all your valuables",
      "A spoils hunting plunderer who has slight knowledge on how to use magic",
    ],
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
      items: ["Long Sword", "chainmail", "Arrows", "Hunting Bow"],
    },
  },
  {
    name: "Guardian Spirit",
    description: [
      "The guardian spirit of this village who attacks all who want to bring harm to the village.",
      "A powerful guardian spirit. It seems to be extremly powerful and durable.",
    ],
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
      items: ["Tome of Attack", "Hand-and-a-Half Sword", "Guardian Dust"],
    },
  },
];
