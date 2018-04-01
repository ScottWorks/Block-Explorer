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
      nodeStoredBlocks: [],
      nodeSearchBlock: [],
      fromAPIBlocks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.readBlocksFromNode = this.readBlocksFromNode.bind(this);
    this.addBlockToNode = this.addBlockToNode.bind(this);
    this.deleteBlockFromNode = this.deleteBlockFromNode.bind(this);
  }

  componentDidMount() {
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
        nodeStoredBlocks: res.data
      });
    });
  }

  addBlockToNode() {
    const { hash } = this.state;
    axios.post(`${blocksBaseURL}`, { hash }).then((res) => {
      let blockHistory = res.data.slice(1, res.data.length);
      let lastSearch = res.data[0];

      this.setState({
        nodeStoredBlocks: blockHistory,
        nodeSearchBlock: lastSearch
      });
    });
  }

  deleteBlockFromNode(id) {
    axios.delete(`${blocksBaseURL}/${id}`).then((res) => {
      this.setState({
        nodeStoredBlocks: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="hash_input"
          id="hash_input"
          placeholder="Enter Block Hash"
          onChange={this.handleChange}
        />
        <button onClick={this.addBlockToNode}>Search for Block</button>
        <BlockSearch
          searchHistory={this.state.nodeStoredBlocks}
          lastSearch={this.state.nodeSearchBlock}
        />
      </div>
    );
  }
}

export default Blocks;
