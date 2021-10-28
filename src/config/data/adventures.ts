import { Adventure } from "../../interfaces/game/Adventure";

export const explorations: Adventure[] = [
  {
    type: "exploration",
    name: "Farmlands",
    description: [
      "Close to the city, the farmlands are an essential source of food. There might not be much out here, but it's a good place to start!",
      "The farmlands provide food for the entire city. While it tends to be quiet out here, there is the occasional monster to fight.",
      "While there are some treasures and monsters to fight, the farmlands tend to be relatively peaceful.",
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
      "Beasts roam these woods - be on guard. You never know what monstrosities you may encounter in the forest!",
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
      "A huge stretch of mountains. Some monsters may have set up home in here. There seem to be animal bones around here.",
      "Covered in snow, the mountain range extends for miles. These mountains may hold some good treasures.",
      "Rumour has it that these mountains are home to some trolls. Better stay on your toes.",
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
      "A mysterious area covered with mist. You sense dreadful magical energy in this place.",
      "This area covered with fog seems like it is haunted. Hopefully there aren't any ghosts haunting this place",
      "A eerie place filled with nothing but fog for as far as the eye can see. This raises questions as to what happened here.",
    ],
    results: {
      monsters: ["Ghost", "Zombie", "Spectre"],
      treasure: ["Short Sword", "Broken Fence", "Broken Scythe"],
      dungeon: ["Mysterious Well", "Cemetery"],
    },
  },
  {
    type: "exploration",
    name: "Swamp",
    description: [
      "You find a swampy land with a bunch of insects and reptiles. This place does not look very dangerous but it may still hold surprises",
      "A place full of rivers and swamps. Quite a few tress here. Hope the insects are friendly",
      "Trees on both sides, insects everywhere, sludge as far as the eye can see. This place is not very friendly to those who dont like the wild.",
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
      "A small cave gives you the creeps as you see webs all around the entrance.",
      "You follow a spider to a small cave. It seems the spiders have made this cave their home.",
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
      "An abandoned farm. This place gives you hostile vibes. Bandits might be lurking around the corner.",
      "Seems like the residents of this farm have abandoned it due to goblins and bandits. You could teach them a lesson and clear out the farm.",
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
      "This area of the woods seem to be bewitched by some kind of magic. Tread with caution as there may be danger ahead.",
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
      "You find a cave hidden in the forest. There seems to be a lot of magic coming out of the cave. Beware of magi.",
      "The wisps and fairies lead you to a cave. Seems they were attracted by the magic. You might find some evil sorcerers in here.",
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
      "You find a hidden path in the mountains. There seem to be a couple of animals through here.",
      "There seems to be a small path through here. You had to activate a mechanism to reveal the path.",
      "This path looks to be intentionally hidden. Looks like no one has used this path for a while.",
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
      "A cave made up of rocks. It's almost as if this place is filled with rock monsters.",
      "A rock formation in the caves. This place may contain golems.",
      "A rock cave with tons of bats, spiders and golems.",
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
      "You find a strange well. It seems like there might be magical creatures in here.",
      "A deep well, but it is not filled with water. Instead it seems to be filled with a lot of magical energy.",
      "An well that seems to have been empty for a long time. Wonder what you will find in here.",
    ],
    results: {
      monsters: ["Spider", "Spectre", "Ghost"],
      treasure: ["Wizard Staff", "Plate Helmet", "Leather Armor"],
    },
  },
  {
    type: "dungeon",
    name: "Cemetery",
    description: [
      "An old cemetery. It seems like it has been abandoned for a long time. You can smell a faint whiff of undead",
      "Countless graves are found here. Now it's a ghost infested den. Be careful while exploring this place",
      "This seems to have been a popular cemetery at one time. Now its a spooky place.",
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
      "A magical spring that resonates with dark magic. This magic feels like it resonates with necromancers.",
      "A dark presence can be felt. This spring is overflowing with dark magic.",
      "You can sense evil creatures from within. This might be the home of some very dangerous magi.",
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
      "A formerly thriving village until it was claimed by bandits. There may be nothing left here",
      "This village seems to have become a bandit den. Looks like the thieves are working hand in hand.",
    ],
    results: {
      monsters: ["Bandit", "Plunderer", "Guardian Spirit"],
      treasure: ["Long Sword", "Leather Armor", "Chainmail"],
    },
  },
];
