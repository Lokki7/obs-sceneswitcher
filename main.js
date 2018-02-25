const electron = require('electron');
//const url = require('url');
//const path = require('path');
const server = require('./server');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.on('closed', () => app.quit());
    Menu.setApplicationMenu(null);
});



