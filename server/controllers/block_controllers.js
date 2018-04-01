const axios = require('axios');
let storedBlocks = [];
let id = storedBlocks.length;

module.exports = {
  addBlock: (req, res) => {
    let hash = req.body.hash;
    axios
      .get('https://api.blockcypher.com/v1/eth/main/blocks/' + hash)
      .then((axiosResp) => {
        axiosResp.data.id = id;
        id++;
        storedBlocks.unshift(axiosResp.data);
        res
          .status(200)
          .send(storedBlocks)
          .end();
      });
  },

  readStoredBlocks: (req, res) => {
    res
      .status(200)
      .send(storedBlocks)
      .end();
  },

  deleteBlock: (req, res) => {
    let { id } = req.params;
    let blockIndex = storedBlocks.findIndex((elem) => {
      return elem.id == id;
    });
    storedBlocks.splice(blockIndex, 1);
    res
      .status(200)
      .send(storedBlocks)
      .end();
  },

  getLatestBlock: (req, res) => {
    latestBlock = [];
    axios.get('https://api.blockcypher.com/v1/eth/main').then((axiosResp) => {
      latestBlock.unshift(axiosResp.data);
      res
        .status(200)
        .send(latestBlock)
        .end();
    });
  }
};
