var {ipcRenderer} = require('electron').remote;

ipcRenderer('getMemed', 1);

console.log('gg');
