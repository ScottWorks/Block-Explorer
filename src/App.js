import React, { Component } from 'react';
import Blocks from './components/Blocks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="header">Block Explorer</h1>
          <hr />
        </div>
        <Blocks />
      </div>
    );
  }
}

export default App;
