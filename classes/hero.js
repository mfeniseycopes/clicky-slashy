class Hero {
  constructor(hp, atk, pos) {
    this.hp   = hp;
    this.atk  = atk;
    this.spd  = 200;
    this.pos  = pos;
    this.dir  = [1, 0]; // start facing right
    this.destination = pos;
  }

  attack(enemy) {

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
    if (this.pos !== this.destination) {
      let moveTop = this.dir[0] * this.spd * elapsed;
      let moveLeft = this.dir[1] * this.spd * elapsed;

      this.pos[0] = this.pos[0] + moveTop;
      this.pos[1] = this.pos[1] + moveLeft;
    }
  }
}

module.exports = Hero;
