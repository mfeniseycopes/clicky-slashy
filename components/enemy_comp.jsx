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
      <div className="enemy entity" id={this.props.enemy.id} style={divStyle} onClick={ this.props.attackEnemy }>
          <img className="fit-image" src="./images/spider-1.png" />
      </div>
    );
  }

});

module.exports = EnemyComp;
