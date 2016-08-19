// react
import React    from "react";
import Enemy from "../classes/enemy";

const EnemyComp = React.createClass({

  render() {
    let divStyle = {
      left: `${this.props.enemy.pos[0]}px`,
      top: `${this.props.enemy.pos[1]}px`
    };


    return (
      <div className="enemy entity" id={this.props.enemy.id} style={divStyle} onClick={ this.props.enemy.alive ? this.props.attackEnemy : null } draggable="false" >
        <img className="fit-image" draggable="false" src="./images/snake-1.png" />
        <img className={this.weaponClassNames()} draggable="false" src="images/knife-1.png" />
      </div>
    );
  },

  weaponClassNames() {
    let classNames = "weapon";
    if (this.props.enemy.attacking > 0) {
      classNames += " attacking";
    }
    return classNames;
  }

});

module.exports = EnemyComp;
