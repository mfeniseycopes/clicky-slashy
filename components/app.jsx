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

    let btnText, onClick, splashHeader, splashText, helpText;

    switch(this.state.game.level) {
      case -1:
      splashHeader = "The Hero has died. Game over.";
      splashText = "Try again?";
      btnText = "Yes!";
      onClick = this.newGame;
      break;

      case 0:
      splashHeader = "Want to play a game that's both clicky and slashy?";
      splashText = "Clicky Slashy is a fun dungeon crawler, roguelike game with totally rad graphics.";
      btnText = "Let's play!";
      onClick = this.play;
      helpText = "Use your mouse-click to move around the dungeon and attack enemies. Kill all the enemies to move to the next level.";
      break;

      case 10:
      splashHeader = "The Hero is victorious!";
      splashText = "Play again?";
      btnText = "Yes!";
      onClick = this.newGame;
      break;

      default:
      splashHeader = `Level ${level} complete!`;
      splashText = "Ready for the next round?";
      btnText = "Yes!";
      onClick = this.play;
      break;
    }

    return (
      <div className="splash">
        <h3>{splashHeader}</h3>
        <p>{splashText}</p>
        <button onClick={onClick}>
          {btnText}
        </button>
        { helpText ?
          <div><h3>HOW TO PLAY</h3><p>{helpText}</p></div> : ""
        }
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
