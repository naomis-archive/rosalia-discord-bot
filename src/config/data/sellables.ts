import { Sellable } from "../../interfaces/game/Sellable";

export const sellables: Sellable[] = [
  {
    type: "sellable",
    name: "Slime Jelly",
    description: ["The leftover mess from defeating a slime.","Slime jelly can be a food item if extracted properly","The remains of a slime you destroyed"],
    value: 1,
  },
  {
    type: "sellable",
    name: "Rat Tail",
    description: ["The tail of a rat.",],
    value: 1,
  },
  {
    type: "sellable",
    name: "Fairy Wing",
    description: ["A wing from a fairy.","The remains of a fairy","A delicate fairy wing"],
    value: 3,
  },
  {
    type: "sellable",
    name: "Spider Silk",
    description: ["The silk from a spider.","The last bit of silk from a spider"],
    value: 5,
  },
  {
    type: "sellable",
    name: "Goblin Horn",
    description: ["The horn from a goblin.","A trophy from a defeated goblin","Proof of victory against a goblin"],
    value: 7,
  },
  {
    type: "sellable",
    name: "Fairy Dust",
    description: ["Magical powder. You can't use it in this form.","Magical powder created by fairies."],
    value: 10,
  },
  {
    type: "sellable",
    name: "Treant Root",
    description: ["A thick root.","A tough and thick root."],
    value: 15,
  },
  {
    type: "sellable",
    name: "Bark Strips",
    description: ["A bunch of tough bark.","A tough bark of a moving tree"],
    value: 10,
  },
  {
    type: "sellable",
    name: "Mandrake Root",
    description: ["A soft, sappy root","Soft roots which can be used to make medicine."],
    value: 15,
  },
];
