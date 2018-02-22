const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/../assets'));
app.use(bodyParser.json({limit: '50mb'}));

const port = process.env.PORT || 7991;
const server = app.listen(port, () => {
  console.log(`127.0.0.1:${port}`);
});

const socket = require('socket.io');
const io = socket.listen(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('connected', (str) => {
    console.log(`a str ${str} recieved`);
  });
});

module.exports = io;
