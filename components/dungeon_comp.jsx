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

  attackEnemy(e) {
    let clickedEnemy = this.state.dungeon.findEnemyById(parseInt(e.currentTarget.id));
    if (this.state.dungeon.hero.attack(clickedEnemy)) {
      e.preventDefault();
    }
  },

  componentDidMount() {
    this.startGame();

    requestAnimationFrame(this.update);
  },

  enemies() {
    return this.state.dungeon.enemies.map((enemy) => {
      return <EnemyComp key={enemy.id} enemy={enemy} attackEnemy={ this.attackEnemy }/>;
    });
  },

  render() {
    let enemies = this.enemies();

    return (
      <div className="dungeon" onClick={this.moveHero}>
        { enemies }
        <HeroComp hero={this.state.dungeon.hero}/>
      </div>
    );
  },

  getInitialState() {
    return { lastUpdate: 0, dungeon: new Dungeon(10)};
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

    let elapsed = (timestamp - this.state.lastUpdate);

    this.state.dungeon.update(elapsed);

    this.setState({ lastUpdate: timestamp, dungeon: this.state.dungeon });

    requestAnimationFrame(this.update);
  }
});

module.exports = DungeonComp;
