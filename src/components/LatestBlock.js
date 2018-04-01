import React, { Component } from 'react';
import { Table } from 'reactstrap';

import HeaderComp from './HeaderComp';

class LatestBlock extends Component {
  render() {
    const { latestBlock } = this.props;

    return (
      <div className="App">
        <HeaderComp children={'Latest Block'} />
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

        {/* <HeaderComp children={'Latest Block'} />
        <p>Hash: 0x{latestBlock.hash}</p>
        <p>Block Height: {latestBlock.height}</p>
        <p>time: {latestBlock.time}</p>
        <p>prev_block: 0x{latestBlock.previous_hash}</p> */}
      </div>
    );
  }
}

export default LatestBlock;
