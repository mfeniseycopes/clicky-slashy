// react
import React       from "react";
import Game        from "../classes/game";
import DungeonComp from "./dungeon_comp";
import Hud         from "./hud";

const App = React.createClass({

  getInitialState() {
    let game = new Game();
    return { game: game, hero: game.dungeon.hero };
  },

  render() {
    return (
      <div>
        <DungeonComp dungeon={this.state.game.dungeon}/>
        <Hud hero={this.state.hero}/>
      </div>
    );
  }

});

module.exports = App;
