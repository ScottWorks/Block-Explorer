const express = require('express');
const bodyParser = require('body-parser');
const marketCtrl = require('./controllers/market_controllers.js');

const app = express();
app.use(bodyParser.json());

// BLOCK DATA
const blocksBaseURL = '/api/blocks';
app.post(`${blocksBaseURL}`, marketCtrl.addBlock);
app.get(`${blocksBaseURL}`, marketCtrl.readStoredBlocks);
app.delete(`${blocksBaseURL}/:id`, marketCtrl.deleteBlock);

const port = 3005;
app.listen(port, () => console.log(`Listening on port: ${port}`));
