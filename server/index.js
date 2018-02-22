const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/../assets'));
app.use(bodyParser.json({limit: '50mb'}));

const port = Process.env.PORT || 7991;
const server = app.listen(port, () => {
  console.log(`127.0.0.1:${port}`);
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('connected', (str) => {
    console.log(`a str ${str} recieved`);
  });
});
