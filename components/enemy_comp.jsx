// react
import React    from "react";
import Enemy from "../classes/enemy";

const EnemyComp = React.createClass({

  render() {
    let divStyle = {
      left: `${this.props.pos[0]}px`,
      top: `${this.props.pos[1]}px`,
      maxHeight: `${this.props.radius * 2}px`,
      maxWidth: `${this.props.radius * 2}px`
    };


    return (
      <div className={this.enemyClassNames()} id={this.props.id} style={divStyle} onClick={ this.props.alive ? this.props.clickHandler : null } draggable="false" >
        <img className="fit-image" draggable="false"
          src={`./images/${this.props.refs.charImg}`} />
        <img className={this.weaponClassNames()} draggable="false"
          src={`./images/${this.props.wpnRefs.wpnImg}`} />
      </div>
    );
  },

  enemyClassNames() {
    let classNames = "enemy entity";
    if (!this.props.alive) {
      classNames += " dead";
    }
    return classNames;
  },

  weaponClassNames() {
    let classNames = "weapon";
    if (this.props.attacking > 0) {
      classNames += " attacking";
    }
    return classNames;
  }

});

module.exports = EnemyComp;
