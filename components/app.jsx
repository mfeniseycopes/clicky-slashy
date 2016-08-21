// react
import React       from "react";
import Game        from "../classes/game";
import DungeonComp from "./dungeon_comp";
import Hud         from "./hud";

const App = React.createClass({

  getInitialState() {
    return { game: new Game() };
  },

  render() {
    return (
      <div>
        <DungeonComp />
        <Hud />
      </div>
    );
  }

});

module.exports = App;
