import React, { Component } from 'react';
import { Table } from 'reactstrap';

import HeaderComp from './HeaderComp';

class LatestBlock extends Component {
  render() {
    const { latestBlock } = this.props;

    return (
      <div className="container">
        <HeaderComp children={'Latest Block'} />
        <hr />
        <Table dark>
          <thead>
            <tr>
              <th>Hash: 0x{latestBlock.hash}</th>
            </tr>
            <tr>
              <th>Block Height: {latestBlock.height}</th>
            </tr>
            <tr>
              <th>time: {latestBlock.time}</th>
            </tr>
            <tr>
              <th>prev_block: 0x{latestBlock.previous_hash}</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default LatestBlock;
