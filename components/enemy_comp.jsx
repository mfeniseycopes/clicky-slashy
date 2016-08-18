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
      <div className="enemy tile" id={this.props.enemy.id} style={divStyle} onClick={ this.props.attackEnemy }>
        🕷
      </div>
    );
  }

});

module.exports = EnemyComp;
