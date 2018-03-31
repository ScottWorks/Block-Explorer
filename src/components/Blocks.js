import React, { Component } from 'react';
import BlockSearch from './BlockSearch';
import BlockList from './BlockList';
import axios from 'axios';

const blocksBaseURL = '/api/blocks';

class Blocks extends Component {
  constructor() {
    super();
    this.state = {
      hash: '',
      fromNodeBlocks: [],
      fromAPIBlocks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.readBlocksFromNode = this.readBlocksFromNode.bind(this);
    this.addBlockToNode = this.addBlockToNode.bind(this);
    this.deleteBlockFromNode = this.deleteBlockFromNode.bind(this);
  }

  componentWillMount() {
    this.readBlocksFromNode();
  }

  handleChange(event) {
    this.setState({
      hash: event.target.value
    });
  }

  readBlocksFromNode() {
    axios.get(`${blocksBaseURL}`).then((res) => {
      this.setState({
        fromNodeBlocks: res.data
      });
    });
  }

  addBlockToNode(hash) {
    axios.post(`${blocksBaseURL}`, { hash }).then((res) => {
      this.setState({
        fromNodeBlocks: res.data
      });
    });
  }

  deleteBlockFromNode(id) {
    axios.delete(`${blocksBaseURL}/${id}`).then((res) => {
      this.setState({
        fromNodeBlocks: res.data
      });
    });
  }

  render() {
    const { fromNodeBlocks } = this.state;

    return (
      <div className="App">
        <input
          type="text"
          name="hash_input"
          id="hash_input"
          placeholder="Enter Block Hash"
          onChange={this.handleChange}
        />
        <button onClick={this.addBlockToNodeFn}>Search for Block</button>
      </div>
    );
  }
}

export default Blocks;
