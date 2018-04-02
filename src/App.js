import React, { Component } from 'react';
import Blocks from './components/Blocks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Block Explorer</h1>
        <Blocks />
      </div>
    );
  }
}

export default App;
