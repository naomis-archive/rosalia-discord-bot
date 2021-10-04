import { assert } from "chai";

import CharacterModel from "../src/database/models/CharacterModel";
import { testCharacter } from "../src/interfaces/game/Character";

suite("Schema Validation", () => {
  suite("Character Schema", () => {
    const testModel = new CharacterModel();
    for (const key in testCharacter) {
      test(`${key} should be in the Character schema`, () => {
        assert(key in testModel, `Missing ${key} from the Character schema.`);
      });
    }
  });
});
