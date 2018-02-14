const electron = require('electron');
const url = require('url');
const path = require('path');
const { exec } = require('child_process');

const {app, BrowserWindow, Menu} = electron;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

//  Listen for the app to be ready
app.on('ready', function() {
  //  Create new window
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // Load html file into the window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'assets/main.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
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
