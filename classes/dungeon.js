import Enemy from "./enemy";
import Hero from "./hero";

class Dungeon {

  constructor(numEnemies) {
    this.lastEntityId = 0;

    this.width = 1200;
    this.height = 800;

    this.hero = new Hero({ dungeon: this, id: this.lastEntityId++ });

    this.enemies = [];
    for(let i = 0; i < numEnemies; i++) {
      this.enemies.push(new Enemy({ dungeon: this, id: this.lastEntityId++ }));
    }
  }

  allEntities() {
    return [this.hero].concat(this.enemies);
  }

  update(elapsed) {
    this.enemies.forEach((enemy) => {
      enemy.update(elapsed);
    });

    this.hero.update(elapsed);
  }

}

module.exports = Dungeon;
