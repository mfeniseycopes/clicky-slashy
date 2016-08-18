import Entity from "./entity";

class Hero extends Entity {
  constructor(params) {
    super(params);
    this.hp   = 100;
    this.atk  = 10;
    this.atkDistance = 80;
    this.spd  = 0.2;
    this.dir  = [1, 0]; // start facing right

    this.pos  = this.startingPos();
    this.destination = null;
    this.alive = true;
  }

  attack(enemy) {
    if (_distance(enemy.pos, this.pos) < this.atkDistance) {
      enemy.receiveDamage(this.atk);
      return true;
    } else {
      return false;
    }

  }

  move(elapsed) {
    let moveX = this.dir[0] * this.spd * elapsed;
    let moveY = this.dir[1] * this.spd * elapsed;

    let newPos = [this.pos[0] + moveX, this.pos[1] + moveY];

    if (Entity.distance(this.pos, this.destination) < Entity.distance(newPos, this.destination)) {
      this.pos = this.destination;
      this.destination = null;
    }
    else if (this.validPos(newPos)) {
      this.pos = newPos;
    }

    if (this.destination && _distance(this.destination, this.pos) < 2) {
      this.destination = null;
    }
  }

  moveToPos(pos) {

    if (this.validPos(pos)) {
      this.destination = pos;

      let x = this.destination[0] - this.pos[0];
      let y = this.destination[1] - this.pos[1];

      let norm = Math.sqrt(x * x + y * y);

      this.dir[0] = x / norm;
      this.dir[1] = y / norm;
    }
  }

  startingPos() {
    return [
      Math.floor(this.dungeon.width / 2) - Math.floor(this.radius),
      Math.floor(this.dungeon.height / 2) - Math.floor(this.radius)
    ];
  }

  update(elapsed) {
    // only move if not at destination
    if (this.destination) {
      this.move(elapsed);
    }
  }

  validPos(pos) {
    return super.validPos(pos) && !this.willCollide(pos);
  }
}

function _distance(pos1, pos2) {
  let x = pos1[0] - pos2[0];
  let y = pos1[1] - pos2[1];

  return Math.sqrt(x * x + y * y);
}

module.exports = Hero;
