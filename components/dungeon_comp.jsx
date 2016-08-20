// react
import React      from "react";
import Dungeon    from "../classes/dungeon";
import Enemy      from "../classes/enemy";
import Hero       from "../classes/hero";
import EnemyComp  from "./enemy_comp";
import HeroComp   from "./hero_comp";

const DungeonComp = React.createClass({

  enemyClick(e) {
    e.preventDefault();
    let clickedEnemy = this.state.dungeon.findEnemyById(parseInt(e.currentTarget.id));

    if (!this.state.dungeon.hero.attack(clickedEnemy)) {
      console.log("click-attack: false");
      this.state.dungeon.hero.setDestination(clickedEnemy.pos);
    }
  },

  componentDidMount() {
    this.startGame();

    requestAnimationFrame(this.update);
  },

  enemies() {
    return this.state.dungeon.enemies.map((enemy) => {
      return <EnemyComp key={enemy.id} enemy={enemy} attackEnemy={ this.enemyClick }/>;
    });
  },

  render() {
    let enemies = this.enemies();

    return (
      <div className="dungeon" onClick={this.dungeonClick}>
        { enemies }
        <HeroComp hero={this.state.dungeon.hero}/>
      </div>
    );
  },

  getInitialState() {
    return { lastUpdate: 0, dungeon: new Dungeon(1)};
  },

  dungeonClick(e) {
    e.preventDefault();

    let x = e.clientX - e.currentTarget.clientLeft - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.clientTop - e.currentTarget.offsetTop;
    this.state.dungeon.hero.setDestination([x, y]);
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
