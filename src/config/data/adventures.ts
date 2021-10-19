import { Adventure } from "../../interfaces/game/Adventure";

export const explorations: Adventure[] = [
  {
    type: "exploration",
    name: "Farmlands",
    description: [
      "Close to the city, the farmlands are an essential source of food. There might not be much out here, but it's a good place to start!",
      "A good starting point. These Farmlands are the heart of the food supply. There isn't much to find but there is stuff to find!",
      "Farmlands: An abundance of fruits, veggies and monsters. There might be a hidden place to find!",
    ],
    results: {
      monsters: ["Slime", "Rat"],
      treasure: ["Short Sword", "Leather Armor"],
      dungeon: ["Spider Nest", "Abandonded Farm"],
    },
  },
  {
    type: "exploration",
    name: "Forest",
    description: [
      "The forest is a dangerous place, but it's a good place to start. There might be monsters out there, but you can always run away!",
      "More trees than can be counted. You can hear wild animals and monsters in the distance. Better stay on guard in this place!",
      "Beasts Lurk these woods. Be on guard. You never know what monstrocities you may encounter in the forest!",
    ],
    results: {
      monsters: ["Fairy", "Wisp"],
      treasure: ["Long Sword"],
      dungeon: ["Hidden Grove", "Dark Cave"],
    },
  },
  {
    type: "exploration",
    name: "Mountains",
    description: [
      "A huge strech of mountains. Some monsters may have set up home in here. There seem to be animal bones around here. Best to be on guard in this place!",
      "Tall mountains that are quite high. These moutains may hold some good treasues.",
      "Rumor has it that these mountains are supposed to be the home to some trolls. Better stay on your toes.",
    ],
    results: {
      monsters:["Troll","Yeti","Bear"],
      treasure:["Battle Axe","Bones"],
      dungeon:["Hidden Path","Rock Cave"],

    }
  }
];

export const dungeons: Adventure[] = [
  {
    type: "dungeon",
    name: "Spider Nest",
    description: [
      "You found a small cave near a local farm. Filled with webbing, you get the sense that something lurks within.",
      "A small cave gives you the creeps as you see webs all around the entrance. Lets save this location and explore it later.",
      "You follow a spider to a small cave. It seems the spiders have made this cave their home. Lets explore this Spider Nest",
    ],
    results: {
      monsters: ["Spider"],
      treasure: ["Spider Silk"],
    },
  },
  {
    type: "dungeon",
    name: "Abandonded Farm",
    description: [
      "This farm appears to have been abandoned by the villagers, but you hear some noises around.",
      "An Abandoned Farm. This place gives you hostile vibes. Bandits might be lurking around the corner. Better stay on your toes",
      "Seems like the residents of this farm have abanoned it due to goblins and bandits. You could teach them a lesson or run away",
    ],
    results: {
      monsters: ["Bandit", "Goblin"],
      treasure: ["Leather Helmet"],
    },
  },
  {
    type: "dungeon",
    name: "Hidden Grove",
    description: [
      "Deep within the woods, this small clearing appears to have some sort of magic.",
      "You feel a faint magical power. As you go closer, you see a hidden grove. Magical creatures lie here.",
      "This area of the woods seem to be biwitched by some kind of magic. Tread with caution as there may dangers ahead",
    ],
    results: {
      monsters: ["Treant", "Mandrake"],
      treasure: ["Chainmail", "Chainmail Helmet"],
    },
  },
  {
    type: "dungeon",
    name: "Dark Cave",
    description: [
      "You can barely see in here, but this place seems to be inhabited by wizards.",
      "You find a Cave hidden in the forest. There seems to be a lot of magic coming out of the cave. Beware of mages",
      "The wisps and faires lead you to a cave. This must be where they were summoned. You might find some evil mages in here.",
    ],
    results: {
      monsters: ["Wizard"],
      treasure: ["Wizard Robe", "Wizard Hat"],
    },
  },
];
