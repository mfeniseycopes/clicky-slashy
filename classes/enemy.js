class Enemy {
  constructor(name, hp, atk, spd, pos, hero) {
    this.name = name;
    this.hp   = hp;
    this.atk  = atk;
    this.dir  = [0, 0];
    this.spd  = spd;
    this.pos  = pos;
    this.hero = hero;
  }

  update(elapsed) {

    let x = this.hero.pos[0] - this.pos[0];
    let y = this.hero.pos[1] - this.pos[1];

    let norm = Math.sqrt(x * x + y * y);

    if (x > 25 || y > 25) {

      this.spd = 0.5;

      this.dir[0] = x / norm;
      this.dir[1] = y / norm;

      let moveTop = this.dir[0] * this.spd * elapsed / 1000;
      let moveLeft = this.dir[1] * this.spd * elapsed / 1000;
      this.pos[0] = this.pos[0] + moveTop;
      this.pos[1] = this.pos[1] + moveLeft;
    } else {
      this.spd = 0;
    }
  }
}

module.exports = Enemy;
