import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Table } from 'reactstrap';

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
          <Button onClick={() => removeBlock(id)}>Remove</Button>
        </tr>
      </tbody>
    );
  }
}

export default BlockHistoryTable;
