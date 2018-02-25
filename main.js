const electron = require('electron');
//const url = require('url');
//const path = require('path');
const Obs = require('./obs');
const server = require('./server');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.on('closed', () => {
        let obs = new Obs();
        obs.setScene('');
        app.quit();
    });
    Menu.setApplicationMenu(null);
});



