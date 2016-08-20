// react
import React    from "react";
import Hero from "../classes/hero";

let divStyle = {};

const HeroComp = React.createClass({

  getInitialState() {
    divStyle.maxHeight = this.props.hero.radius * 2;
    divStyle.maxWidth  = divStyle.maxHeight;
    return null;
  },

  render() {
    divStyle.left = `${this.props.hero.pos[0] - this.props.hero.radius}px`;
    divStyle.top  = `${this.props.hero.pos[1] - this.props.hero.radius}px`;

    return (
      <div className="hero entity" style={divStyle} draggable="false" >

        <img className="fit-image" draggable="false"
          src={`./images/${this.props.hero.refs.charImg}`} />

        <img className={this.weaponClassNames()} draggable="false"
          src={`./images/${this.props.hero.wpn.refs.wpnImg}`} />
        
      </div>
    );
  },

  weaponClassNames() {
    let classNames = "weapon";
    if (this.props.hero.atkTimeRemaining > 0) {
      classNames += " attacking";
    }
    return classNames;
  }

});

module.exports = HeroComp;
