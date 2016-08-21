// react
import React       from "react";
import Game        from "../classes/game";
import DungeonComp from "./dungeon_comp";
import Hud         from "./hud";

const App = React.createClass({

  game() {
    return (
      <div>

        <DungeonComp
          dungeon={this.state.game.dungeon}
          gameOver={this.gameOver}
          nextLevel={this.nextLevel}/>

        <Hud hero={this.state.hero}/>

      </div>
    );
  },

  splash() {

    let level = this.state.game.level;

    let btnText, message, onClick;

    switch(this.state.game.level) {
      case -1:
      message = "The Hero has died. Game over.";
      btnText = "Play Again";
      onClick = this.newGame;
      break;

      case 0:
      message = "Want to play a game with clicks and slashes?";
      btnText = "Yes!";
      onClick = this.play;
      break;

      case 2:
      message = "The Hero is victorious! Play again?";
      btnText = "Yes!";
      onClick = this.newGame;
      break;

      default:
      message = `Level ${level} complete! Ready for the next round?`;
      btnText = "Yes!";
      onClick = this.play;
      break;
    }

    return (
      <div>
        <h3>{message}</h3>
        <button onClick={onClick}>
          {btnText}
        </button>
      </div>
    );
  },

  getInitialState() {
    let game = new Game();
    return { game: game, hero: game.dungeon.hero };
  },

  gameOver() {
    this.state.game.gameOver();
    this.setState({ game: this.state.game });
  },

  nextLevel() {
    this.state.game.nextLevel();
    this.setState({ game: this.state.game });
  },

  newGame() {
    let game = new Game();
    this.setState({ game: game, hero: game.dungeon.hero });
  },

  play() {
    this.state.game.start();
    this.setState({ game: this.state.game });
  },

  render() {
    return this.state.game.playing ? this.game() : this.splash();
  }

});

module.exports = App;
