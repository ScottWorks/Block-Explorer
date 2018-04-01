import React, { Component } from 'react';
import BlockHistory from './BlockHistory';

class BlockSearch extends Component {
  render() {
    const { searchHistory, lastSearch } = this.props;

    return (
      <div className="App">
        <div>
          <h1>Searched Block</h1>
          <p>Hash: 0x{lastSearch.hash}</p>
          <p>Block Height: {lastSearch.height}</p>
          <p>total: {lastSearch.total}</p>
          <p>fees: {lastSearch.fees}</p>
          <p># of Transactions: {lastSearch.n_tx}</p>
          <p>size: {lastSearch.size}</p>
          <p>nonce: {lastSearch.nonce}</p>
          <p>prev_block: 0x{lastSearch.prev_block}</p>
          <p>mrkl_root: {lastSearch.mrkl_root}</p>
          <p>time: {lastSearch.time}</p>
          <BlockHistory blockHistory={searchHistory} />
        </div>
      </div>
    );
  }
}

export default BlockSearch;
