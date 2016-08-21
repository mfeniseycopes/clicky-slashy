import GameStore from'../stores/game_store';

class Entity {

  constructor(stats, dungeon, id) {
    this.id = id;
    this.dungeon = dungeon;

    // base
    this.name   = stats.name;
    this.hp     = stats.hp;
    this.atk    = stats.atk;
    this.agl    = stats.agl;
    this.spd    = stats.spd;
    this.radius = stats.rad;
    this.pcp    = stats.pcp;
    this.wpn    = stats.wpn;
    this.rng    = stats.wpn.rng;

    // instance
    this.alive = true;
    this.pos = [0, 0];
    this.dir = [-1, 0];
    this.waitUntilAtk = 0;
    this.atkTarget = 0;
    this.atkTimeRemaining = 0;
    this.atkAnimationLength = 1000; // ms
    this.destination = null;

    // for react component
    this.refs = stats.refs;
  }


  attack(entity) {
    if (this.waitUntilAtk <= 0 && this.inAttackRange(entity)) {
      // face entity
      let norm = Entity.distance(entity.pos, this.pos);
      this.dir[0] = (entity.pos[0] - this.pos[0]) / norm;
      this.dir[1] = (entity.pos[1] - this.pos[1]) / norm;

      // entity.receiveDamage(this.atk);
      this.atkTarget = entity;
      this.waitUntilAtk = this.agl;
      this.atkTimeRemaining = this.atkAnimationLength;
      return true;
    }
    return false;
  }

  collidable() {
    return this.alive;
  }

  // determine if entity is colliding with any other entity on board
  colliding() {
    let entities = this.dungeon.aliveEntities();

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

  die() {
    this.alive = false;
    this.dungeon.entityDied(this.id);
  }

  inAttackRange(otherEntity) {
    return (Entity.distance(this.pos, otherEntity.pos) - otherEntity.radius) < this.radius + this.rng;
  }

  inBounds(pos) {
    return (pos[0] > this.radius) && (pos[1] <= (this.dungeon.width - this.radius));
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
      Math.floor(Math.random() * (this.dungeon.width - 2 * this.radius) + this.radius),
      Math.floor(Math.random() * (this.dungeon.height - 2 * this.radius) + this.radius)
    ];

    return pos;
  }

  receiveDamage(damage) {
    GameStore.newEvent(this.name, damage);

    this.hp -= damage;
    if (this.hp <= 0) {
      this.die();
    }
  }

  update(elapsed) {
    this.updateTimers(elapsed);
  }

  updateDir() {
    let norm = Entity.distance(this.destination, this.pos);

    this.dir[0] = (this.destination[0] - this.pos[0]) / norm;
    this.dir[1] = (this.destination[1] - this.pos[1]) / norm;
  }

  updateTimers(elapsed) {
    this.atkTimeRemaining -= elapsed;
    this.waitUntilAtk -= elapsed;

    if (this.atkTimeRemaining <= 0 && this.atkTarget) {
      this.atkTarget.receiveDamage(this.atk);
      this.atkTarget = null;
    }
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
