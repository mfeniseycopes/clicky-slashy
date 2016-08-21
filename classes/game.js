import Enemy   from "./enemy";
import Hero    from "./hero";
import Dungeon from "./dungeon";
import LevelConstants from "./constants/level_constants";


class Game {

  constructor(level = 0) {
    this.level = level;
    this.dungeon = new Dungeon(this.level);
    this.playing = false;
  }

  gameOver() {
    this.level = -1; // gameOver
    this.playing = false;
  }

  nextLevel() {
    this.level++;
    this.playing = false;
  }

  start() {
    this.dungeon = new Dungeon(this.level);
    this.playing = true;
  }
}

module.exports = Game;
