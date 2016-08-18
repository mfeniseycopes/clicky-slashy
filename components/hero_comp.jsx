// react
import React    from "react";
import Hero from "../classes/hero";

const HeroComp = React.createClass({

  render() {
    let divStyle = {
      left: `${this.props.hero.pos[0]}px`,
      top: `${this.props.hero.pos[1]}px`
    };

    return (
      <div className="hero entity" style={divStyle}>
        <img className="fit-image" src="./images/cat-hero.png" />
      </div>
    );
  }

});

module.exports = HeroComp;
