import Entity from "./entity";

class Enemy extends Entity {
  constructor(params) {
    super(params);
    this.name = "spider";
    this.hp   = 10;
    this.atk  = 1;
    this.dir  = [0, 0];
    this.spd  = 0.05;
  }

  hero() {
    return this.dungeon.hero;
  }

  update(elapsed) {

    let x = this.hero().pos[0] - this.pos[0];
    let y = this.hero().pos[1] - this.pos[1];

    let norm = Math.sqrt(x * x + y * y);

    if (norm > 25) {

      this.spd = 0.05;

      this.dir[0] = x / norm;
      this.dir[1] = y / norm;

      let moveTop = this.dir[0] * this.spd * elapsed;
      let moveLeft = this.dir[1] * this.spd * elapsed;
      this.pos[0] = this.pos[0] + moveTop;
      this.pos[1] = this.pos[1] + moveLeft;
    }
    else {
      this.spd = 0;
    }
  }
}

module.exports = Enemy;
