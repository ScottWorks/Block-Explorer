import React, { Component } from 'react';
import BlockSearch from './BlockSearch';
import BlockList from './BlockList';
import LatestBlock from './LatestBlock';
import Button from './Button';
import Header from './Header';
import axios from 'axios';

const blocksBaseURL = '/api/blocks';

class Blocks extends Component {
  constructor() {
    super();
    this.state = {
      hash: '',
      nodeStoredBlocks: [],
      nodeSearchBlock: [],
      latestBlock: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.readBlocksFromNode = this.readBlocksFromNode.bind(this);
    this.addBlockToNode = this.addBlockToNode.bind(this);
    this.deleteBlockFromNode = this.deleteBlockFromNode.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
  }

  componentDidMount() {
    this.readBlocksFromNode();
  }

  handleChange(event) {
    console.log(event.target.value);
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

  getLatestBlock() {
    axios.get(`${blocksBaseURL}/latest`).then((res) => {
      this.setState({
        latestBlock: res.data[0]
      });
    });
  }

  render() {
    const { nodeStoredBlocks, nodeSearchBlock } = this.state;

    const searchCacheNotEmpty =
      nodeSearchBlock.length !== 0 ? (
        <BlockSearch
          searchHistory={nodeStoredBlocks}
          lastSearch={nodeSearchBlock}
          removeBlock={this.deleteBlockFromNode}
        />
      ) : null;

    return (
      <div className="App">
        <LatestBlock latestBlock={this.state.latestBlock} />

        <Button
          function={this.getLatestBlock}
          children={'Get the Latest Block'}
        />

        <Header children={'Block Explorer'} />

        <input
          type="text"
          name="hash_input"
          id="hash_input"
          value={this.state.hash}
          placeholder="Enter Block Hash"
          onChange={this.handleChange}
        />

        <Button function={this.addBlockToNode} children={'Search for Block'} />

        {searchCacheNotEmpty}
      </div>
    );
  }
}

export default Blocks;
