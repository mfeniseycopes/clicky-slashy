import Enemy from "./enemy";
import Hero from "./hero";

class Dungeon {

  constructor(numEnemies) {
    this.lastEntityId = 0;

    this.width = 1200;
    this.height = 800;

    this.hero = new Hero({ dungeon: this, id: this.lastEntityId++, class: "hero" });

    this.enemies = [];
    for(let i = 0; i < numEnemies; i++) {
      this.enemies.push(new Enemy({ dungeon: this, id: this.lastEntityId++, class: "spider" }));
    }
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
