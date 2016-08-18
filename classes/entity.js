class Entity {

  constructor(params) {
    this.id = params.id;
    this.size = [40, 40];
    this.dungeon = params.dungeon;
    this.pos = this.randomPos();

    this.alive = false;
    this.hp   = 0;
    this.class = params.class;
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
    else if ((this.topLeftWithin(that) || this.bottomLeftWithin(that)) ||
             (that.topLeftWithin(this) || that.bottomLeftWithin(this))) {
      return true;
    }
    else {
      return false;
    }
  }

  // determines if pos is within board bounds
  inBounds(pos) {
    return (
      (pos[0] >= 0 && pos[0] <= this.dungeon.width) &&
      (pos[1] >= 1 && pos[1] <= this.dungeon.height)
    );
  }

  // selects random board position while avoiding other Entities
  randomOpenPos() {
    this.pos = this.randomPos();
    while (this.colliding()) {
      this.pos = this.randomPos();
    }
  }

  // selects random board position
  randomPos() {
    let pos = [
      Math.floor(Math.random() * (this.dungeon.width - this.size[0])),
      Math.floor(Math.random() * (this.dungeon.height - this.size[1]))
    ];

    return pos;
  }

  receiveDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.alive = false;
    }
  }

  validPos(pos) {

    return (
      (pos[0] >= 0) && ((pos[0] + this.size[0]) <= this.dungeon.width) &&
      (pos[1] >= 0) && ((pos[1] + this.size[1]) <= this.dungeon.height)
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

  bottomLeftWithin(that) {
    return (
      (this.pos[0] > that.pos[0] && this.pos[0] < that.pos[0] + that.size[0]) &&
      (this.pos[1] + this.size[1] > that.pos[1] && this.pos[1] + this.size[1] < that.pos[1] + that.size[1])
    );
  }

  topLeftWithin(that) {
    return (
      (this.pos[0] > that.pos[0] && this.pos[0] < that.pos[0] + that.size[0]) &&
      (this.pos[1] > that.pos[1] && this.pos[1] < that.pos[1] + that.size[1])
    );
  }

  static distance(pos1, pos2) {
    let x = pos1[0] - pos2[0];
    let y = pos1[1] - pos2[1];

    return Math.sqrt(x * x + y * y);
  }
}




module.exports = Entity;
