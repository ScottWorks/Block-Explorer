import React, { Component } from 'react';
import BlockHistoryTable from './BlockHistoryTable';
import Header from './Header';

class BlockHistory extends Component {
  render() {
    const { blockHistory, removeBlock } = this.props;
    return (
      <div className="App">
        <Header children={'Search History'} />
        {blockHistory.map((elem) => (
          <BlockHistoryTable
            id={elem.id}
            key={elem.id}
            hash={elem.hash}
            blockHeight={elem.height}
            time={elem.time}
            removeBlock={removeBlock}
          />
        ))}
      </div>
    );
  }
}

export default BlockHistory;
