const { ipcRenderer } = require('electron');
const io = require('socket.io-client');
const socket = io.connect();

const getMemed = () => {
  ipcRenderer.send('getMemed');
};

socket.emit('connected', 'omegaPrime');
