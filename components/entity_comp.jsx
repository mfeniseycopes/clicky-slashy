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
    return {
      left: `${this.props.pos[0]}px`,
      top: `${this.props.pos[1]}px`,
      height: `${this.props.radius * 2}px`,
      width: `${this.props.radius * 2}px`
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
