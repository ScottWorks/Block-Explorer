import React, { Component } from 'react';
import BlockHistoryTable from './BlockHistoryTable';
import { Table } from 'reactstrap';

class BlockHistory extends Component {
  render() {
    const { blockHistoryArr } = this.props;

    return (
      <div className="App">
        <h1>Search History</h1>

        {blockHistoryArr
          .reverse()
          .map((elem) => (
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
