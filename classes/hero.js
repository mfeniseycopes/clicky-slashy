import Entity from "./entity";

class Hero extends Entity {
  constructor(params) {
    super(params);
    this.hp   = 100;
    this.atk  = 10;
    this.atkDistance = 25;
    this.spd  = 0.2;
    this.dir  = [1, 0]; // start facing right

    this.pos  = this.startingPos();
    this.destination = null;
  }

  attack(enemy) {
    if (_distance(enemy.pos, this.pos) < this.atkDistance) {
      console.log("attack!");
      enemy.receiveDamage(this.atk);
      return true;
    } else {
      return false;
    }

  }

  startingPos() {
    return [
      Math.floor(this.dungeon.width / 2) - Math.floor(this.size[0] / 2),
      Math.floor(this.dungeon.height / 2) - Math.floor(this.size[1] / 2)
    ];
  }

  moveToPos(pos) {
    this.destination = pos;

    let x = this.destination[0] - this.pos[0];
    let y = this.destination[1] - this.pos[1];

    let norm = Math.sqrt(x * x + y * y);

    this.dir[0] = x / norm;
    this.dir[1] = y / norm;
  }

  update(elapsed) {
    // only move if not at destination
    if (this.destination) {
      let lastPos = this.pos.slice();
      let moveTop = this.dir[0] * this.spd * elapsed;
      let moveLeft = this.dir[1] * this.spd * elapsed;

      this.pos[0] = this.pos[0] + moveTop;
      this.pos[1] = this.pos[1] + moveLeft;

      if (_distance(this.destination, this.pos) < 2) {
        this.destination = null;
      }
    }
  }
}

function _distance(pos1, pos2) {
  let x = pos1[0] - pos2[0];
  let y = pos1[1] - pos2[1];

  return Math.sqrt(x * x + y * y);
}

module.exports = Hero;
