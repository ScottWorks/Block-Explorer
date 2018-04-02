import React, { Component } from 'react';
import { Table } from 'reactstrap';

import BlockHistoryTable from './BlockHistoryTable';
import HeaderComp from './HeaderComp';

class BlockHistory extends Component {
  render() {
    const { blockHistory, removeBlock } = this.props;
    return (
      <div className="table_container">
        <HeaderComp children={'Search History'} />
        <hr />
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Hash</th>
              <th>Block Height</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
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
        </Table>
      </div>
    );
  }
}

export default BlockHistory;
