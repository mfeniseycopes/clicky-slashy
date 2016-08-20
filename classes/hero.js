import Entity from "./entity";

class Hero extends Entity {
  constructor(stats, dungeon, id) {
    super(stats, dungeon, id);

    this.pos  = this.dungeon.center();
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

    if (this.destination && Entity.distance(this.destination, this.pos) < 2) {
      this.destination = null;
    }
  }

  setDestination(pos) {

    if (this.inBounds(pos)) {

      this.destination = pos;

      let norm = Entity.distance(this.destination, this.pos);

      this.dir[0] = (this.destination[0] - this.pos[0]) / norm;
      this.dir[1] = (this.destination[1] - this.pos[1]) / norm;
    }
  }

  update(elapsed) {
    super.update(elapsed);
    // only move if not at destination
    if (this.destination) {
      this.move(elapsed);
    }
  }

  validPos(pos) {
    return super.validPos(pos) && !this.willCollide(pos);
  }
}

module.exports = Hero;
