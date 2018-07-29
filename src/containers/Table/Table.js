import React, { Component } from 'react';
import Cell from '../../components/Cell/Cell'

// eslint-disable-next-line
import Classes from './Table.css'

class Table extends Component {
  
  state = {...this.props.initialState}

  updateTurnAndchooseWinner(player, value) {
    let pointPlayers = [...this.state.pointPlayers]
    let currentPlayer = {...this.state.pointPlayers[player]}
    pointPlayers[player].point = currentPlayer.point * value
    this.setState({pointPlayers: pointPlayers})
    this.props.point.map (divi => 
      this.state.pointPlayers.map ( punt => 
        punt.point % divi === 0 ? this.setState({finish: true}) : null
      )
    )
  }

  updatePlayer(currentTurn, nextTurn, player, index, value) {
    let cells = [...this.state.cells]
    let cell = {...this.state.cells[index]}
    cell.player = player
    cells[index] = cell
    this.setState({cells: cells})
    this.setState({turn: nextTurn})
    this.updateTurnAndchooseWinner(currentTurn, value)
  }

  clickButtonHandler = (props) => {
    if (this.state.cells[props].player === "" && this.state.finish === false) {
      this.state.turn === 0 ? 
        this.updatePlayer(0, 1, this.props.players[0], props, this.state.cells[props].value) :
        this.updatePlayer(1, 0, this.props.players[1], props, this.state.cells[props].value)      
    }
  }
  
  clickButtonResetHandler =() => {
    let pointPlayers = [...this.state.pointPlayers]
    pointPlayers[0].point = 1
    pointPlayers[1].point = 1
    this.setState({pointPlayers: pointPlayers})
    this.setState({cells: this.props.initialState.cells})
    this.setState({turn: this.props.initialState.turn})
    this.setState({finish: this.props.initialState.finish})
  }

  render() {
    let finishMessage = null

    if (this.state.finish) {
      const winner = this.state.turn === 0 ? 1 : 0
      finishMessage = (
        <div>
          <h2 className="Messsage">The winner is player {this.props.players[winner]}</h2>
        </div>
      )
    }

    return (
      <div>
        <h2>Turno para el jugador {this.props.players[this.state.turn]}</h2>
        <div className="Row">
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[0].id)}
            player={this.state.cells[0].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[1].id)}
            player={this.state.cells[1].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[2].id)}
            player={this.state.cells[2].player}/>
        </div>
        <div className="Row">
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[3].id)}
            player={this.state.cells[3].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[4].id)}
            player={this.state.cells[4].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[5].id)}
            player={this.state.cells[5].player}/>
        </div>
        <div className="Row">
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[6].id)}
            player={this.state.cells[6].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[7].id)}
            player={this.state.cells[7].player}/>
          <Cell 
            click={this.clickButtonHandler.bind(this, this.state.cells[8].id)}
            player={this.state.cells[8].player}/>
        </div>
          {finishMessage}
          <button onClick={this.clickButtonResetHandler}  className="Reset">Reset the Game</button>
      </div>
    );
  }
}

export default Table;