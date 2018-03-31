const axios = require('axios');
let storedBlocks = [];
let id = 0;

module.exports = {
  addBlock: (req, res) => {
    let hash = req.body.hash;
    axios
      .get('https://api.blockcypher.com/v1/eth/main/blocks/' + hash)
      .then((axiosResp) => {
        axiosResp.data.id = id;
        id++;
        storedBlocks.push(axiosResp.data);
        res
          .status(200)
          .send(storedBlocks)
          .end();
      });
  },

  readStoredBlocks: (req, res) => {
    res.status(200).send(storedBlocks);
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
  }
};
