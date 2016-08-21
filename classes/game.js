import Enemy   from "./enemy";
import Hero    from "./hero";
import Dungeon from "./dungeon";
import LevelConstants from "./constants/level_constants";


class Game {

  constructor(level = 0) {
    this.level = level;
    this.dungeon = new Dungeon(LevelConstants[this.level].enemies);
    this.playing = false;
  }

  gameOver() {
    return this.dungeon.hero.alive === false;
  }

  levelOver() {
    return this.dungeon.cleared();
  }

  nextLevel() {
    this.level++;
    this.dungeon = new Dungeon(LevelConstants[this.level].enemies);
  }

  start() {
    this.playing = true;
  }
}

module.exports = Game;
