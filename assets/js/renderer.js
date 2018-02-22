const { ipcRenderer } = require('electron');

const getMemed = () => {
  ipcRenderer.send('getMemed');
};
