const express = require('express');
const bodyParser = require('body-parser');

const TASK_NAME = process.argv[2];
const TASK_ID = process.argv[3];
const EXPRESS_PORT = process.argv[4];
const NODE_MODE = process.argv[5];
const MAIN_ACCOUNT_PUBKEY = process.argv[6];
const SECRET_KEY = process.argv[7];
const K2_NODE_URL = process.argv[8];
const SERVICE_URL = process.argv[9];
const STAKE = Number(process.argv[10]);

const app = express();
app.use(bodyParser.json());

console.log('SETTING UP EXPRESS', NODE_MODE);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(EXPRESS_PORT, () => {
  console.log(`${TASK_NAME} listening on port ${EXPRESS_PORT}`);
});

module.exports = {
  app,
  NODE_MODE,
  TASK_ID,
  MAIN_ACCOUNT_PUBKEY,
  SECRET_KEY,
  K2_NODE_URL,
  SERVICE_URL,
  STAKE
};
