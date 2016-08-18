class Entity {

  constructor(params) {
    this.id = params.id;
    this.size = [25, 25];
    this.dungeon = params.dungeon;
    this.pos = this.randomPos();

    this.alive = false;
    this.hp   = 0;
  }

  // determines if pos is within board bounds
  inBounds(pos) {
    return (
      (pos[0] >= 0 && pos[0] <= this.dungeon.width) &&
      (pos[1] >= 1 && pos[1] <= this.dungeon.height)
    );
  }

  // determine if entity is colliding with any other entity on board
  colliding() {
    let entities = this.dungeon.allEntities();

    entities.forEach((entity) => {
      if (this.collidingWith(entity)) {
        return true;
      }
    });

    return false;
  }

  // returns true if entities are colliding
  collidingWith(that) {

    if (this.id === that.id) {
      return false;
    }
    else if (this.topLeftWithin(that) || this.bottomRightWithin(that)) {
      return true;
    }
    else {
      return false;
    }

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
    console.log(pos);

    return pos;
  }

  receiveDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.alive = false;
    }
  }

  _bottomRightWithin(that) {
    return (
      (that.pos[0] > this.pos[0] && that.pos[0] < this.pos[0] + this.size[0]) &&
      (that.pos[1] > this.pos[1] && that.pos[1] < this.pos[1] + this.size[1])
    );
  }

  _topLeftWithin(that) {
    return (
      (this.pos[0] > that.pos[0] && this.pos[0] < that.pos[0] + that.size[0]) &&
      (this.pos[1] > that.pos[1] && this.pos[1] < that.pos[1] + that.size[1])
    );
  }

}

module.exports = Entity;
