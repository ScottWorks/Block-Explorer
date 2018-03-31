import React, { Component } from 'react';
import BlockHistory from './BlockHistory';

class BlockSearch extends Component {
  render() {
    // Returns the last element in the blockArray
    let blockArrayLength = this.props.blockArray.length - 1;
    const blocks = this.props.blockArray.map((elem, idx) => {
      if (blockArrayLength === idx) {
        return (
          <div key={idx}>
            <p>Hash: {elem.hash}</p>
          </div>
        );
      }
    });
    return (
      <div className="App">
        <h1>Results</h1>
        {/* <BlockHistory searchHistory={this.props.blocks} /> */}
        {blocks}
      </div>
    );
  }
}

export default BlockSearch;
