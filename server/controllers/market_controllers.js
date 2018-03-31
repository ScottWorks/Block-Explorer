const axios = require('axios');
let storedBlocks = [
  {
    hash: 'b35265965f6f14c5d692b2030922fce53067fc0e9d8c8490c31d4ecd3e46500c',
    height: 1564040,
    chain: 'ETH.main',
    total: 20306306718874652,
    fees: 1595580000000000,
    size: 661,
    ver: 0,
    time: '2016-05-22T12:43:00Z',
    received_time: '2016-05-22T12:43:00Z',
    coinbase_addr: '4bb96091ee9d802ed039c4d1a5f6216f90f81b01',
    relayed_by: '',
    nonce: 2464233431647216600,
    n_tx: 1,
    prev_block:
      'e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    mrkl_root:
      '23f82aa013765c42fbee7f4e57c22befd7aece689834d0d2d6e25208713efb6a',
    txids: ['8f39fb4940c084460da00a876a521ef2ba84ad6ea8d2f5628c9f1f8aeb395342'],
    internal_txids: [
      'dd107c8488867fd53c0aa3bf1d8a478a077ec67af75842d24f1a64eb44e4d902',
      '9a98678d209910f70bded624f2c5c18ed17d417752072d41c5d61b42c277348c',
      'ad959961f46663f785e1e0a0b2656960b5d27061097c5092c4e68964bfaf0041',
      '5a23d74a484ec58b211264888846be6d7428c33be93223396eff3626e036a7f4',
      '73906b2f1a1d7fd17c77684e5e811ae8710e4a032501090da264712db7a48e7a',
      '53ce88e1cf98b37fb64c16121b4641dde65290838ce0bde6cb1c319df3ef8ff9',
      '29bc4e7fa2db28b0a2ef9e7a5e073cc7532e609f752b2eb0b5731b0c6b926a2c',
      '4a9afc5a680917955e781b890688143f56badc76785af98753d5267270d7d809'
    ],
    depth: 3792355,
    prev_block_url:
      'https://api.blockcypher.com/v1/eth/main/blocks/e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    tx_url: 'https://api.blockcypher.com/v1/eth/main/txs/',
    id: 0
  },
  {
    hash: 'b35265965f6f14c5d692b2030922fce53067fc0e9d8c8490c31d4ecd3e46500c',
    height: 1564040,
    chain: 'ETH.main',
    total: 20306306718874652,
    fees: 1595580000000000,
    size: 661,
    ver: 0,
    time: '2016-05-22T12:43:00Z',
    received_time: '2016-05-22T12:43:00Z',
    coinbase_addr: '4bb96091ee9d802ed039c4d1a5f6216f90f81b01',
    relayed_by: '',
    nonce: 2464233431647216600,
    n_tx: 1,
    prev_block:
      'e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    mrkl_root:
      '23f82aa013765c42fbee7f4e57c22befd7aece689834d0d2d6e25208713efb6a',
    txids: ['8f39fb4940c084460da00a876a521ef2ba84ad6ea8d2f5628c9f1f8aeb395342'],
    internal_txids: [
      'dd107c8488867fd53c0aa3bf1d8a478a077ec67af75842d24f1a64eb44e4d902',
      '9a98678d209910f70bded624f2c5c18ed17d417752072d41c5d61b42c277348c',
      'ad959961f46663f785e1e0a0b2656960b5d27061097c5092c4e68964bfaf0041',
      '5a23d74a484ec58b211264888846be6d7428c33be93223396eff3626e036a7f4',
      '73906b2f1a1d7fd17c77684e5e811ae8710e4a032501090da264712db7a48e7a',
      '53ce88e1cf98b37fb64c16121b4641dde65290838ce0bde6cb1c319df3ef8ff9',
      '29bc4e7fa2db28b0a2ef9e7a5e073cc7532e609f752b2eb0b5731b0c6b926a2c',
      '4a9afc5a680917955e781b890688143f56badc76785af98753d5267270d7d809'
    ],
    depth: 3792355,
    prev_block_url:
      'https://api.blockcypher.com/v1/eth/main/blocks/e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    tx_url: 'https://api.blockcypher.com/v1/eth/main/txs/',
    id: 1
  },
  {
    hash: 'b35265965f6f14c5d692b2030922fce53067fc0e9d8c8490c31d4ecd3e46500c',
    height: 1564040,
    chain: 'ETH.main',
    total: 20306306718874652,
    fees: 1595580000000000,
    size: 661,
    ver: 0,
    time: '2016-05-22T12:43:00Z',
    received_time: '2016-05-22T12:43:00Z',
    coinbase_addr: '4bb96091ee9d802ed039c4d1a5f6216f90f81b01',
    relayed_by: '',
    nonce: 2464233431647216600,
    n_tx: 1,
    prev_block:
      'e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    mrkl_root:
      '23f82aa013765c42fbee7f4e57c22befd7aece689834d0d2d6e25208713efb6a',
    txids: ['8f39fb4940c084460da00a876a521ef2ba84ad6ea8d2f5628c9f1f8aeb395342'],
    internal_txids: [
      'dd107c8488867fd53c0aa3bf1d8a478a077ec67af75842d24f1a64eb44e4d902',
      '9a98678d209910f70bded624f2c5c18ed17d417752072d41c5d61b42c277348c',
      'ad959961f46663f785e1e0a0b2656960b5d27061097c5092c4e68964bfaf0041',
      '5a23d74a484ec58b211264888846be6d7428c33be93223396eff3626e036a7f4',
      '73906b2f1a1d7fd17c77684e5e811ae8710e4a032501090da264712db7a48e7a',
      '53ce88e1cf98b37fb64c16121b4641dde65290838ce0bde6cb1c319df3ef8ff9',
      '29bc4e7fa2db28b0a2ef9e7a5e073cc7532e609f752b2eb0b5731b0c6b926a2c',
      '4a9afc5a680917955e781b890688143f56badc76785af98753d5267270d7d809'
    ],
    depth: 3792355,
    prev_block_url:
      'https://api.blockcypher.com/v1/eth/main/blocks/e52d8cd9bf52374fd47e9d9ed81d2702f9e6352455f0ac07000bd3682b70cde7',
    tx_url: 'https://api.blockcypher.com/v1/eth/main/txs/',
    id: 2
  }
];

let id = storedBlocks.length;

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
  }
};
