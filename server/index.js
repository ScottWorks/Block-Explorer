const express = require('express');
const bodyParser = require('body-parser');
const blockCtrl = require('./controllers/block_controllers.js');

const app = express();
app.use(bodyParser.json());

// BLOCK DATA
const blocksBaseURL = '/api/blocks';
app.post(`${blocksBaseURL}`, blockCtrl.addBlock);
app.get(`${blocksBaseURL}`, blockCtrl.readStoredBlocks);
app.delete(`${blocksBaseURL}/:id`, blockCtrl.deleteBlock);

// BLOCK DATA
const latestBlockBaseURL = '/api/blocks/latest';
app.get(`${latestBlockBaseURL}`, blockCtrl.getLatestBlock);

const port = 3005;
app.listen(port, () => console.log(`Listening on port: ${port}`));
