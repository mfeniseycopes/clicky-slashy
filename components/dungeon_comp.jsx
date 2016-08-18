// react
import React      from "react";
import Dungeon    from "../classes/dungeon";
import Enemy      from "../classes/enemy";
import Hero       from "../classes/hero";
import EnemyComp  from "./enemy_comp";
import HeroComp   from "./hero_comp";

// let _hero = new Hero(100, 200, [400, 250]);
// let _enemies = [new Enemy("spider", 5, 1, 50, [25, 25], _hero)];

const DungeonComp = React.createClass({

  componentDidMount() {
    console.log("componentDidMount");
    this.startGame();

    requestAnimationFrame(this.update);
  },

  enemies() {
    return this.state.dungeon.enemies.map((enemy) => {
      return <EnemyComp enemy={enemy} />;
    });
  },

  render() {
    let enemies = this.enemies();

    return (
      <div className="dungeon" onClick={this.moveHero}>
        { enemies }
        <HeroComp hero={this.state.dungeon.hero} onClick={ this.moveHero }/>
      </div>
    );
  },

  getInitialState() {
    console.log(Date.now());
    return { lastUpdate: 0, dungeon: new Dungeon(2)};
  },

  moveHero(e) {
    e.preventDefault();

    let x = e.clientX - e.currentTarget.clientLeft - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.clientTop - e.currentTarget.offsetTop;
    this.state.dungeon.hero.moveToPos([x, y]);
  },

  startGame() {

  },

  update(timestamp) {

    console.log("update");
    let elapsed = (timestamp - this.state.lastUpdate);

    this.state.dungeon.update(elapsed);

    this.setState({ lastUpdate: timestamp });

    requestAnimationFrame(this.update);
  }
});

module.exports = DungeonComp;
