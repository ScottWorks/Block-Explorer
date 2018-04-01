import React, { Component } from 'react';
import { Table } from 'reactstrap';
import BlockHistory from './BlockHistory';
import HeaderComp from './HeaderComp';

class BlockSearch extends Component {
  render() {
    const { searchHistory, lastSearch } = this.props;

    return (
      <div className="App">
        <HeaderComp children={'Block Details'} />

        {/* // <thead>
        //   <tr>
        //     <th>Hash: 0x{latestBlock.hash}</th>
        //   </tr>
        //   <tr>
        //     <th>Block Height: {latestBlock.height}</th>
        //   </tr>
        //   <tr>
        //     <th>time: {latestBlock.time}</th>
        //   </tr>
        //   <tr>
        //     <th>prev_block: 0x{latestBlock.previous_hash}</th>
        //   </tr>
        //   <tr>
        //     <th>prev_block: 0x{latestBlock.previous_hash}</th>
        //   </tr>
        //   <tr>
        //     <th>prev_block: 0x{latestBlock.previous_hash}</th>
        //   </tr>
        //   <tr>
        //     <th>prev_block: 0x{latestBlock.previous_hash}</th>
        //   </tr>
        //   <tr>
        //     <th>prev_block: 0x{latestBlock.previous_hash}</th>
        //   </tr>
        // </thead> */}
        <Table dark>
          <thead>
            <tr>
              <th>Hash: 0x{lastSearch.hash}</th>
            </tr>
            <tr>
              <th>Block Height: {lastSearch.height}</th>
            </tr>
            <tr>
              <th>total: {lastSearch.total}</th>
            </tr>
            <tr>
              <th>fees: {lastSearch.fees}</th>
            </tr>
            <tr>
              <th># of Transactions: {lastSearch.n_tx}</th>
            </tr>
            <tr>
              <th>size: {lastSearch.size}</th>
            </tr>
            <tr>
              <th>nonce: {lastSearch.nonce}</th>
            </tr>
            <tr>
              <th>prev_block: 0x{lastSearch.prev_block}</th>
            </tr>
            <tr>
              <th>mrkl_root: {lastSearch.mrkl_root}</th>
            </tr>
            <tr>
              <th>time: {lastSearch.time}</th>
            </tr>
          </thead>
        </Table>
        <div>
          <BlockHistory
            blockHistory={searchHistory}
            removeBlock={this.props.removeBlock}
          />
        </div>
      </div>
    );
  }
}

export default BlockSearch;
