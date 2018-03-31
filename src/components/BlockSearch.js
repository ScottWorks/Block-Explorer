import React, { Component } from 'react';
import BlockHistory from './BlockHistory';

class BlockSearch extends Component {
  render() {
    // Returns the last element in the blockArray
    const { blockArray } = this.props;

    let blockHistory = blockArray.slice(0, blockArray.length - 1);
    let lastSearch = blockArray[blockArray.length - 1];

    const displayLastSearch =
      blockArray.length > 0 ? (
        <div>
          <p>Hash: 0x{lastSearch.hash}</p>
          <p>Block Height: {lastSearch.height}</p>
          <p>total: {lastSearch.total}</p>
          <p>fees: {lastSearch.fees}</p>
          <p>size: {lastSearch.size}</p>
          <p>nonce: {lastSearch.nonce}</p>
          <p>prev_block: 0x{lastSearch.prev_block}</p>
          <p>mrkl_root: {lastSearch.mrkl_root}</p>
          <p>time: {lastSearch.time}</p>
        </div>
      ) : null;

    return (
      <div className="App">
        <h1>Searched Block</h1>
        {displayLastSearch}
      </div>
    );
  }
}

export default BlockSearch;
