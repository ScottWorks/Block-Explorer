import React, { Component } from 'react';
import Blocks from './components/Blocks';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header children={'Block Explorer'} />
        <Blocks />
      </div>
    );
  }
}

export default App;
