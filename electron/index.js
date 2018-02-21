const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;
const getMemed = require('./getMemed.js');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../assets/main.html'),
    protocol: 'file:',
    slashes: true
  }));

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

ipcMain.on('getMemed', (event, arg) => {
  getMemed();
});

const mainMenuTemplate = [
  {
    label: 'MemeRoulette',
    submenu: [
      {
        label: 'Quit',
        click() {
          app.quit();
        },
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Control+Q'
      }
    ]
  },
  {
    label: 'About'
  }
];
