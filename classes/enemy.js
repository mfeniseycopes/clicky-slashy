import Entity from "./entity";

class Enemy extends Entity {
  constructor(params) {
    super(params);
    this.name = "spider";
    this.hp   = 5;
    this.atk  = 1;
    this.dir  = [0, 0];
    this.spd  = 0.05;
    this.alive = true;
    this.atkDistance = 10;
    this.agl = 5000;
    this.waitUntilAtk = 0;
    this.waitUntilSwitchDir = 0;
    this.destination = this.randomPos();
    this.sensoryRange = 200;
    this.randomOpenPos();
    this.attacking = 0;
    this.atkAnimationLength = 1000; // ms
  }

  attack() {
    if (this.waitUntilAtk <= 0) {
      this.dungeon.hero.receiveDamage(this.atk);
      this.waitUntilAtk = this.agl;
      this.attacking = this.atkAnimationLength;
    }
  }

  canAttack() {
    return Entity.distance(this.pos, this.dungeon.hero.pos) <= this.atkDistance;
  }

  hero() {
    return this.dungeon.hero;
  }

  move(elapsed) {

    if (Entity.distance(this.pos, this.hero().pos) < this.sensoryRange) {
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
    this.updateTimers(elapsed);
    this.inAttackRange(this.hero()) ? this.attack() : this.move(elapsed);
  }

  updateTimers(elapsed) {
    this.attacking -= elapsed;
    this.waitUntilAtk -= elapsed;
    this.waitUntilSwitchDir -= elapsed;
  }

  validPos(pos) {
    return super.validPos(pos) && !this.willCollide(pos);
  }
}

module.exports = Enemy;
