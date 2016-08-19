import Entity from "./entity";

class Enemy extends Entity {
  constructor(stats, dungeon, id) {
    super(stats, dungeon, id);

    this.waitUntilSwitchDir = 0;
    this.destination = this.randomPos();
    this.randomOpenPos(); // sets initial position
  }

  hero() {
    return this.dungeon.hero;
  }

  move(elapsed) {

    if (Entity.distance(this.pos, this.hero().pos) < this.pcp) {
      this.destination = this.hero().pos;
    }
    else if (this.destination === this.pos || this.waitUntilSwitchDir <= 0) {
      this.destination = this.randomPos();
      this.waitUntilSwitchDir = this.agl;
    }

    // this.destination = pos;

    let norm = Entity.distance(this.destination, this.pos);

    this.dir[0] = (this.destination[0] - this.pos[0]) / norm;
    this.dir[1] = (this.destination[1] - this.pos[1]) / norm;

    let moveX = this.dir[0] * this.spd * elapsed;
    let moveY = this.dir[1] * this.spd * elapsed;

    let newPos = [this.pos[0] + moveX, this.pos[1] + moveY];

    if (this.validPos(newPos)) {
      this.pos = newPos;
    }
    // try another direction
    else {

      let leftPos = [this.pos[0] + moveY, this.pos[1] - moveX];
      let rightPos = [this.pos[0] - moveY, this.pos[1] + moveX];
      let revPos = [this.pos[0] - moveY, this.pos[1] - moveX];

      if (this.validPos(leftPos)) {
        this.pos = leftPos;
      } else if (this.validPos(rightPos)) {
        this.pos = rightPos;
      } else if (this.validPos(revPos)){
        this.pos = revPos;
      }
    }
  }

  update(elapsed) {
    // this.updateTimers(elapsed);
    super.update(elapsed);
    this.inAttackRange(this.hero()) ? this.attack(this.hero()) : this.move(elapsed);
  }

  updateTimers(elapsed) {
    super.updateTimers(elapsed);
    this.waitUntilSwitchDir -= elapsed;
  }

  validPos(pos) {
    return super.validPos(pos) && !this.willCollide(pos);
  }
}

module.exports = Enemy;
