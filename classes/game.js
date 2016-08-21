import Enemy   from "./enemy";
import Hero    from "./hero";
import Dungeon from "./dungeon";
import LevelConstants from "./constants/level_constants";


class Game {

  constructor(level = 0) {
    this.level = level;
    this.dungeon = new Dungeon(LevelConstants[this.level].enemies);
  }

}

module.exports = Game;
