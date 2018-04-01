import React, { Component } from 'react';
import BlockHistoryTable from './BlockHistoryTable';

class BlockHistory extends Component {
  render() {
    const { blockHistory } = this.props;
    return (
      <div className="App">
        <h1>Search History</h1>

        {blockHistory.map((elem) => (
          <BlockHistoryTable
            key={elem.id}
            hash={elem.hash}
            blockHeight={elem.height}
            time={elem.time}
          />
        ))}
      </div>
    );
  }
}

export default BlockHistory;
