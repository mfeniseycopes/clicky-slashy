// react
import React    from "react";

const Hud = React.createClass({

  render() {

    return (
      <div>
        <div className="health">
          <ul>Hero
            <li>
              HP: 20/50
            </li>
            <li>
              ATK: 5
            </li>
            <li>
              SPD: 2
            </li>
          </ul>
        </div>
        <div className="events">
          <ul>
            <li>
              Spider take 5 dmg
            </li>
            <li>
              Spider take 5 dmg
            </li>
            <li>
              Spider take 5 dmg
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Hud;
