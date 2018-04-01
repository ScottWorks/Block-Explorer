import React, { Component } from 'react';
import Header from './Header';

class LatestBlock extends Component {
  render() {
    const { latestBlock } = this.props;

    return (
      <div className="App">
        <Header children={'Latest Block'} />
        <p>Hash: 0x{latestBlock.hash}</p>
        <p>Block Height: {latestBlock.height}</p>
        <p>time: {latestBlock.time}</p>
        <p>prev_block: 0x{latestBlock.previous_hash}</p>
      </div>
    );
  }
}

export default LatestBlock;
