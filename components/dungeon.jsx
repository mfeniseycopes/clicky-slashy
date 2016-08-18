// react
import React    from "react";
import Enemy from "../classes/enemy";
import Hero from "../classes/hero";
import EnemyComp from "./enemy_comp";
import HeroComp from "./hero_comp";

let _hero = new Hero(100, 200, [400, 250]);
let _enemies = [new Enemy("spider", 5, 1, 50, [25, 25], _hero)];

const Dungeon = React.createClass({

  componentDidMount() {
    console.log("componentDidMount");
    this.startGame();

    requestAnimationFrame(this.update);
  },

  enemies() {
    return _enemies.map((enemy) => {
      return <EnemyComp enemy={enemy} />;
    });
  },

  render() {
    let enemies = this.enemies();

    return (
      <div className="dungeon" onClick={this.moveHero}>
        { enemies }
        <HeroComp hero={_hero}/>
      </div>
    );
  },

  getInitialState() {
    console.log(Date.now());
    return { lastUpdate: 0 };
  },

  moveHero(e) {
    e.preventDefault();
    _hero.moveToPos([e.clientX, e.clientY]);
  },

  startGame() {

  },

  update(timestamp) {

    console.log("update");
    let secondsElapsed = (timestamp - this.state.lastUpdate) / 1000;
    this.updateEntities(secondsElapsed);

    this.setState({ lastUpdate: timestamp });

    requestAnimationFrame(this.update);
  },

  updateEntities(elapsed) {
    _enemies.forEach((enemy) => {
      enemy.update(elapsed);
    });
    _hero.update(elapsed);
  }
});

module.exports = Dungeon;
