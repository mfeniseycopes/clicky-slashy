// react
import React      from "react";
import Dungeon    from "../classes/dungeon";
import Enemy      from "../classes/enemy";
import Hero       from "../classes/hero";
import EntityComp  from "./entity_comp";

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
      return (
        <EntityComp
          key={enemy.id}
          id={enemy.id}
          pos={enemy.pos}
          radius={enemy.radius}
          alive={enemy.alive}
          atkTimeRemaining={enemy.atkTimeRemaining}
          clickHandler={this.enemyClick}
          refs={enemy.refs}
          wpnRefs={enemy.wpn.refs}
          dir={enemy.dir}>
        </EntityComp>
      );
    });
  },

  hero() {
    return <EntityComp
      key={this.state.dungeon.hero.id}
      id={this.state.dungeon.hero.id}
      pos={this.state.dungeon.hero.pos}
      radius={this.state.dungeon.hero.radius}
      alive={this.state.dungeon.hero.alive}
      atkTimeRemaining={this.state.dungeon.hero.atkTimeRemaining}
      clickHandler={this.heroClick}
      refs={this.state.dungeon.hero.refs}
      wpnRefs={this.state.dungeon.hero.wpn.refs}
      dir={this.state.dungeon.hero.dir}>
    </EntityComp>;
  },

  heroClick() {
    // doesn't need to do anything
  },

  render() {
    let enemies = this.enemies();
    let hero    = this.hero();

    return (
      <div className="dungeon" onClick={this.dungeonClick}>
        { enemies }
        { hero }
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
