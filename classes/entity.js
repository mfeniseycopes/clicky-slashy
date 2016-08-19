class Entity {

  constructor(params) {
    this.id = params.id;
    this.dungeon = params.dungeon;
    this.alive = true;
    this.pos = [0, 0];

    this.hp   = 0;
    this.class = params.class;
    this.radius = 20;

    // attacking
    this.atk = 0;
    this.agl = 5000;
    this.waitUntilAtk = 0;
    this.attacking = 0;
    this.atkAnimationLength = 1000; // ms
    this.range = 10;
  }


  attack(entity) {
    if (this.waitUntilAtk <= 0) {
      entity.receiveDamage(this.atk);
      this.waitUntilAtk = this.agl;
      this.attacking = this.atkAnimationLength;
    }
  }

  collidable() {
    return this.alive;
  }

  // determine if entity is colliding with any other entity on board
  colliding() {
    let entities = this.dungeon.allEntities();

    for (let i = 0; i < entities.length; i++) {
      if (entities[i].collidable() && this.collidingWith(entities[i])) {
        return true;
      }
    }

    return false;
  }

  // returns true if entities are colliding
  collidingWith(that) {

    if (this.id === that.id) {
      return false;
    }
    else if (this.radius + that.radius > Entity.distance(this.pos, that.pos)) {
      return true;
    }
    else {
      return false;
    }
  }

  inAttackRange(otherEntity) {
    return (Entity.distance(this.pos, otherEntity.pos) - otherEntity.radius) < this.radius + this.range;
  }

  // selects random board position while avoiding other Entities
  randomOpenPos() {
    this.pos = this.randomPos();
    while (this.colliding()) {
      this.pos = this.randomPos();
    }
    return this.pos;
  }

  // selects random board position
  randomPos() {
    let pos = [
      Math.floor(Math.random() * (this.dungeon.width - this.radius)),
      Math.floor(Math.random() * (this.dungeon.height - this.radius))
    ];

    return pos;
  }

  receiveDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.alive = false;
    }
  }

  setDestination() {

  }

  update(elapsed) {
    this.updateTimers(elapsed);
  }

  updateTimers(elapsed) {
    this.attacking -= elapsed;
    this.waitUntilAtk -= elapsed;
    // this.waitUntilSwitchDir -= elapsed;
  }

  validPos(pos) {

    return (
      (pos[0] - this.radius >= 0 && pos[0] + this.radius <= this.dungeon.width) &&
      (pos[1] - this.radius >= 1 && pos[1] + this.radius <= this.dungeon.height)
    );
  }

  willCollide(pos) {
    let currentPos = this.pos;
    this.pos = pos;
    if (this.colliding()) {
      this.pos = currentPos;
      return true;
    } else {
      this.pos = currentPos;
      return false;
    }
  }

  static distance(pos1, pos2) {
    let x = pos1[0] - pos2[0];
    let y = pos1[1] - pos2[1];

    return Math.sqrt(x * x + y * y);
  }
}




module.exports = Entity;
