const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const socket = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/../assets'));
app.use(bodyParser.json({limit: '50mb'}));

let port = Process.env.PORT || 7991;
const server = app.listen(port, () => {
  console.log(`127.0.0.1:${port}`);
});
