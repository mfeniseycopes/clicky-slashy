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

    this.aliveEnemies = [];
    this.deadEnemies = [];
    enemyTypes.forEach((type) => {
      this.aliveEnemies.push(new Enemy(EntityConstants[type], dungeon, this.lastEntityId++));
    });
  }


  aliveEntities() {
    return this.aliveEnemies.concat([this.hero]);
  }

  allEntities() {
    if (this.hero) {
      return [this.hero].concat(this.enemies);
    }
  }

  center() {
    return [this.width / 2, this.height / 2];
  }

  cleared() {
    return aliveEnemies.length === 0;
  }

  enemies() {
    return this.aliveEnemies.concat(this.deadEnemies);
  }

  entityDied(id) {
    for (let i = 0; i < this.aliveEnemies.length; i++) {
      if (this.aliveEnemies[i].id === id) {
        this.deadEnemies.push(this.aliveEnemies.splice(i, 1)[0]);
        break;
      }
    }
  }

  findEnemyById(id) {
    for (let i = 0; i < this.aliveEnemies.length; i++) {
      if (this.aliveEnemies[i].id === id) {
        return this.aliveEnemies[i];
      }
    }

    return null;
  }

  update(elapsed) {
    this.aliveEntities().forEach((entity) => {
      if (entity.alive) {
        entity.update(elapsed);
      }
    });
  }

}

module.exports = Dungeon;
