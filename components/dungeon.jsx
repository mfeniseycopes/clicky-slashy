// react
import React    from "react";
import Enemy from "../classes/enemy";
import Hero from "../classes/hero";

let _hero = new Hero(100, 10, [400, 250]);
let _enemies = [new Enemy("spider", 5, 1, 0.5, [25, 25], _hero)];

const Dungeon = React.createClass({

  componentDidMount() {
    console.log("componentDidMount");
    this.startGame();

    requestAnimationFrame(this.update);
  },

  enemies() {
    return _enemies.map((enemy) => {
      let divStyle = {
        left: `${enemy.pos[0]}px`,
        top: `${enemy.pos[1]}px`
      };

      return (
        <div className="enemy tile" style={divStyle}>
          🕷
        </div>
      );
    });
  },

  hero() {
    let divStyle = {
      left: `${_hero.pos[0]}px`,
      top: `${_hero.pos[1]}px`
    };

    return (
      <div className="hero tile" style={divStyle}>
        ⚔
      </div>
    );
  },

  render() {
    let enemies = this.enemies();
    let hero = this.hero();

    return (
      <div className="dungeon">
        { enemies }
        { hero }
      </div>
    );
  },

  getInitialState() {
    console.log(Date.now());
    return { lastUpdate: 0 };
  },

  startGame() {

  },

  update(timestamp) {

    console.log("update");
    let elapsed = timestamp - this.state.lastUpdate;
    this.updateEntities(timestamp);

    this.setState({ lastUpdate: timestamp });

    requestAnimationFrame(this.update);
  },

  updateEntities(elapsed) {
    _enemies.forEach((enemy) => {
      enemy.update(elapsed);
    });
  }
});

module.exports = Dungeon;
