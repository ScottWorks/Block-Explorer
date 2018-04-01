import React, { Component } from 'react';
import Button from './Button';

class BlockHistoryTable extends Component {
  render() {
    const { blockHeight, time, id, removeBlock } = this.props;

    return (
      <div className="App">
        <p>{blockHeight}</p>
        <p>{time}</p>
        <button onClick={() => removeBlock(id)}>Remove</button>
      </div>
    );
  }
}

export default BlockHistoryTable;
