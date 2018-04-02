import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BlockHistoryTable extends Component {
  render() {
    const { blockHeight, hash, time, id, removeBlock } = this.props;

    return (
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{hash}</td>
          <td>{blockHeight}</td>
          <td>{time}</td>
          <td>
            <Button onClick={() => removeBlock(id)}>Remove</Button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default BlockHistoryTable;
