import React, { Component } from 'react';
import BlockSearch from './BlockSearch';
import BlockList from './BlockList';
import Button from './Button';
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
        hash: '',
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
          value={this.state.hash}
          placeholder="Enter Block Hash"
          onChange={this.handleChange}
        />
        <Button function={this.addBlockToNode} children={'Search for Block'} />
        <BlockSearch
          searchHistory={this.state.nodeStoredBlocks}
          lastSearch={this.state.nodeSearchBlock}
          removeBlock={this.deleteBlockFromNode}
        />
      </div>
    );
  }
}

export default Blocks;
