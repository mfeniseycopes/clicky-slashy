import Enemy from "./enemy";
import Hero from "./hero";
import EntityConstants from "./constants/entity_constants";
import LevelConstants from "./constants/level_constants";

class Dungeon {

  constructor(enemyTypes) {
    this.lastEntityId = 0;

    this.width = 1200;
    this.height = 800;
    let dungeon = this;

    this.hero = new Hero(EntityConstants.HERO, dungeon, this.lastEntityId++);

    this.enemies = [];
    enemyTypes.forEach((type) => {
      this.enemies.push(new Enemy(EntityConstants[type], dungeon, this.lastEntityId++));
    });
  }

  allEntities() {
    if (this.hero) {
      return [this.hero].concat(this.enemies);
    }
  }

  center() {
    return [this.width / 2, this.height / 2];
  }

  findEnemyById(id) {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].id === id) {
        return this.enemies[i];
      }
    }

    return null;
  }

  update(elapsed) {
    this.allEntities().forEach((entity) => {
      if (entity.alive) {
        entity.update(elapsed);
      }
    });
  }

}

module.exports = Dungeon;
