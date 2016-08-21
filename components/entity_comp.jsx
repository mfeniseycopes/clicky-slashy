// react
import React    from "react";

const EntityComp = React.createClass({

  render() {

    return (
      <div className={this.entityClassNames()} id={this.props.id} style={this.charStyle()} onClick={ this.props.alive ? this.props.clickHandler : null } >
        <div className={this.weaponClassNames()}></div>
      </div>
    );
  },

  charStyle() {
    // debugger
    let rotation = Math.acos([-1] * this.props.dir[0]);
    let scaleX = 1;
    let scaleY = 1;
    if (this.props.dir[1] > 0) {
      rotation *= -1;
    }
    if (this.props.dir[0] > 0) {
      // scaleX = -1;
      scaleY = -1;
      // rotation -= 1.5708;
      // rotation *= -1;

    }

    return {
      left: `${this.props.pos[0]}px`,
      top: `${this.props.pos[1]}px`,
      height: `${this.props.radius * 2}px`,
      width: `${this.props.radius * 2}px`,
      transform: `rotate(${rotation}rad) scaleX(${scaleX}) scaleY(${scaleY})`
    };
  },

  entityClassNames() {
    let classNames = `entity ${this.props.refs.charCSSClass}`;
    if (!this.props.alive) {
      classNames += " dead";
    }
    return classNames;
  },

  weaponClassNames() {
    let classNames = `weapon ${this.props.wpnRefs.wpnCSSClass}`;
    if (this.props.atkTimeRemaining > 0) {
      classNames += " attacking";
    }
    return classNames;
  }

});

module.exports = EntityComp;
