import Enemy from "./enemy";
import Hero from "./hero";
import EntityConstants from "./constants/entity_constants";

class Dungeon {

  constructor(numEnemies) {
    this.lastEntityId = 0;

    this.width = 1200;
    this.height = 800;
    let dungeon = this;

    this.hero = new Hero(EntityConstants.HERO, dungeon, this.lastEntityId++);

    this.enemies = [];
    // for(let i = 0; i < numEnemies; i++) {
      this.enemies.push(new Enemy(EntityConstants.SNAKE, dungeon, this.lastEntityId++));
      this.enemies.push(new Enemy(EntityConstants.SPIDER, dungeon, this.lastEntityId++));
    // }
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
