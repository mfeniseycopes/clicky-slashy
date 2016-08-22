// react
import React    from "react";
import GameStore from'../stores/game_store';

const Hud = React.createClass({

  componentDidMount() {
    this.gameListener = GameStore.registerListener(this.update);
  },

  componentWillUnmount() {
    GameStore.removeListener(this.gameListener);
  },

  getInitialState() {
    return { hero: this.props.hero, events: [] };
  },

  render() {

    return (
      <div className="hud" selectable="">
        <div className="health">
          <ul>Hero
            <li>
              HP: {this.state.hero.hp}/100
            </li>
          </ul>
        </div>
        <div className="events">
          <ul>
            {
              this.state.events.map((event, key) => {
                return (
                  <li key={key}>{event}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  },

  update() {
    this.setState({ hero: GameStore.hero(), events: GameStore.events() });
  }

});

module.exports = Hud;
