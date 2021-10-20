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
      monsters: ["Troll", "Yeti", "Bear"],
      treasure: ["Battle Axe", "Bones"],
      dungeon: ["Hidden Path", "Rock Cave"],
    },
  },
  {
    type: "exploration",
    name: "Mist Land",
    description: [
      "A mysterious area covered with Mist. You sense dreaful magical energy in this place.",
      "This area covered with fog seems like it is haunted. Hopefully there aren't any ghosts haunting this place",
      "A eerie place filled with nothing but fog for as far as the eye can see. This raises questions as to what happened here.",
    ],
    results: {
      monsters: ["Ghost", "Zombie", "Specter"],
      treasure: ["Short Sword", "Broken Fence", "Broken Scythe"],
      dungeon: ["Mysterious Well", "Spooky Animal Shelter"],
    },
  },
  {
    type: "exploration",
    name: "Riverside Warf",
    description: [
      "You find a swampy land with a bunch of insects and reptiles. This place does not look very dangerous but it may still hold suprises",
      "A place full of rivers and swamps. Quite a few tress here. Lets hope the insects are friendly",
      "Trees to both sides, Insects everywhere, Swamps in front. This place is not very friendly to those who dont like the wild.",
    ],
    results: {
      monsters: ["Giant Insectoid", "Insect Queen", "Elemental Summon"],
      treasure: ["Insect Parts", "Leather Armor", "Long Sword"],
      dungeon: ["Black Spring", "Overrun Village"],
    },
  },
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
  {
    type: "dungeon",
    name: "Hidden Path",
    description: [
      "You find a Hidden Path in the mountains. There seems to be a couple of animals through here.",
      "There seems to be a small path through here. You had to activate a mechanism to reveal the path. Wonder what lies ahead",
      "There seems to be a path hidden by someone. Looks like no one has used this path for a while.",
    ],
    results: {
      monsters: ["Troll", "Boar", "Wisp"],
      treasure: ["Hand-and-a-Half Sword", "Chainmail", "Scroll of Attack"],
    },
  },
  {
    type: "dungeon",
    name: "Rock Cave",
    description: [
      "A cave made up of Rocks. It's almost as if this place is filled with rock monsters.",
      "A Rock Formation in the caves. This place may contain golems.",
      "A Rock cave with tons of bats , spiders and golems."
    ],
    results: {
      monsters: ["Bat", "Golem", "Spider"],
      treasure: ["Spider Silk", "Chainmail Helmet", "Scroll of Defence"],
    },
  },
  {
    type: "dungeon",
    name: "Mysterious Well",
    description: [
      "You find a Strange well. It seems like there might be magicial creatures in here.",
      "A deep well but it is not filled with water. Instead it seems to be filled with a lot of magical energy.",
      "An well that seems to have been non functional for a long time. Wonder what you will find in here.",
    ],
    results: {
      monsters: ["Spider", "Specter", "Ghost"],
      treasure: ["Wizard Staff", "Plate Helmet", "Leather Armor"],
    },
  },
  {
    type: "dungeon",
    name: "Spooky Animal Shelter",
    description: [
      "An old Animal Shelter. It seems like it has been abandoned for a long time. You can smell a faint smell of undead",
      "10,000 Animals used to live here. Now it's a ghost infested den. Be careful while exploring this place",
      "This seems to have been a Animal Shelter once upon a time. Now its a Spooky place.",
    ],
    results: {
      monsters: ["Zombie", "Undead Animal", "Ghost"],
      treasure: ["Zombie Claw", "Animal Fang", "Magic Dust"],
    },
  },
  {
    type: "dungeon",
    name: "Black Spring",
    description: [
      "A magical Spring that resonates with dark magic. This magic feels like it resonates with necromancers.",
      "A dark presence can be felt. This Spring is powerful with dark magic.",
      "You can sense dark creatures from within. This might be the home of some dark mages.",
    ],
    results: {
      monsters: ["Necromancer", "Lesser Demon", "Hostile Familiar"],
      treasure: ["Magic Dust", "Used Scroll", "Tattered Black Mage Robes"],
    },
  },
  {
    type: "dungeon",
    name: "Overrun Village",
    description: [
      "A village that has been overrun by bandits and plunderers. Almost all the residents have been killed and looted",
      "A formerly thriving village until it was overrun by bandits and plunderers. There may be nothing left here",
      "This Village seems to have become a bandit den. Looks like the bandits and Plunderers are working hand in hand.",
    ],
    results: {
      monsters: ["Bandit", "Plunderer", "Guardian Spirit"],
      treasure: ["Long Sword", "Leather Armor", "Chainmail"],
    },
  },
];
