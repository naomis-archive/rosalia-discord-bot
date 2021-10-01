import { assert } from "chai";

import { dungeons, explorations } from "../src/config/data/adventures";
import { consumables } from "../src/config/data/consumables";
import { equippables } from "../src/config/data/equippables";
import { monsters } from "../src/config/data/monsters";
import { sellables } from "../src/config/data/sellables";

suite("Data", () => {
  const items = [...equippables, ...sellables, ...consumables];
  const adventures = [...explorations, ...dungeons];

  suite("Adventure Validation", () => {
    for (const adventure of adventures) {
      test(`${adventure.name} should have valid monsters.`, () => {
        for (const monster of adventure.results.monsters) {
          const found = monsters.find((m) => m.name === monster);
          assert.exists(found, `${monster} not found.`);
        }
      });

      test(`${adventure.name} should have valid treasures.`, () => {
        for (const treasure of adventure.results.treasure) {
          const found = items.find((i) => i.name === treasure);
          assert.exists(found, `${treasure} not found.`);
        }
      });

      if (adventure.type === "exploration") {
        test(`${adventure.name} should have a valid dungeon.`, () => {
          const found = dungeons.find(
            (d) => d.name === adventure.results.dungeon
          );
          assert.exists(found, `${adventure.results.dungeon} not found.`);
        });
      }
    }
  });

  suite("Monster Validation", () => {
    for (const monster of monsters) {
      test(`${monster.name} should have valid items.`, () => {
        for (const item of monster.drops.items) {
          const found = items.find((i) => i.name === item);
          assert.exists(found, `${item} not found.`);
        }
      });
    }
  });
});
