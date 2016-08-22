// react
import React      from "react";
import Dungeon    from "../classes/dungeon";
import Enemy      from "../classes/enemy";
import Hero       from "../classes/hero";
import EntityComp  from "./entity_comp";
import LevelConstants from "../classes/constants/level_constants";

let _animationRequestId;

const DungeonComp = React.createClass({

  componentDidMount() {
    _animationRequestId = requestAnimationFrame(this.update);
  },

  componentWillUnmount() {
    cancelAnimationFrame(_animationRequestId);
  },

  dungeonClick(e) {
    e.preventDefault();

    let x = e.clientX - e.currentTarget.clientLeft - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.clientTop - e.currentTarget.offsetTop;
    this.props.dungeon.hero.setDestination([x, y]);
  },

  enemyClick(e) {
    e.preventDefault();
    e.stopPropagation();

    let clickedEnemy = this.props.dungeon.findEnemyById(parseInt(e.currentTarget.id));

    if (this.props.dungeon.hero.attack(clickedEnemy)) {
      this.props.dungeon.hero.clearDestination();
    }
    else {
      this.props.dungeon.hero.setDestination(clickedEnemy.pos);
    }
  },

  enemies() {
    return this.props.dungeon.enemies().map((enemy) => {
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

  getInitialState() {
    return { lastUpdate: 0 };
  },

  hero() {
    return <EntityComp
      key={this.props.dungeon.hero.id}
      id={this.props.dungeon.hero.id}
      pos={this.props.dungeon.hero.pos}
      radius={this.props.dungeon.hero.radius}
      alive={this.props.dungeon.hero.alive}
      atkTimeRemaining={this.props.dungeon.hero.atkTimeRemaining}
      clickHandler={this.heroClick}
      refs={this.props.dungeon.hero.refs}
      wpnRefs={this.props.dungeon.hero.wpn.refs}
      dir={this.props.dungeon.hero.dir}>
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

  update(timestamp) {

    let elapsed = (timestamp - this.state.lastUpdate);

    this.props.dungeon.update(elapsed);

    this.setState({ lastUpdate: timestamp, dungeon: this.state.dungeon });

    if (this.props.dungeon.cleared()) {
      this.props.nextLevel();
    }
    else if (this.props.dungeon.heroKilled()) {
      console.log("dungeon_comp-gameOver");
      this.props.gameOver();
    } else {
      _animationRequestId = requestAnimationFrame(this.update);
    }
  }
});

module.exports = DungeonComp;
