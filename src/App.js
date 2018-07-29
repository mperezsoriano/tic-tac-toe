import React, { Component } from 'react';
import './App.css';

import Table from './containers/Table/Table'

class App extends Component {
  

  render() {
    const point = [30,1001, 7429, 238, 627, 1495, 506, 935]
    const values = [2,3,5,7,11,13,17,19,23]
    const players = ["X", "O"]
    const initialState = {
      cells: [
        {id: 0, player:'', value: 2}, {id: 1, player:'', value: 3}, {id: 2, player:'', value: 5},
        {id: 3, player:'', value: 7}, {id: 4, player:'', value: 11}, {id: 5, player:'', value: 13},
        {id: 6, player:'', value: 17}, {id: 7, player:'', value: 19}, {id: 8, player:'', value: 23}
      ],
      pointPlayers: [{point: 1}, {point: 1}],
      turn: 0,
      finish: false,
      newGame: 1
    }

    return (
      <div className="App">
        <h1>TIC TAC TOE</h1>
        <Table initialState={initialState} point={point} values={values} players={players}/>
      </div>
    );
  }
}

export default App;
