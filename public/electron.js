const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

var mainWindow;

//#region IPC
var connectionString = 'HostName=stghorserace.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=G47EHKIstkl2h1v/sPJDrqoJouxACaWeTtrTCZeZhX0=';

console.log('started eventhub');

var { EventHubClient, EventPosition } = require('@azure/event-hubs');

var printError = function (err) {
  console.log(err.message);
};


var ehClient;

EventHubClient.createFromIotHubConnectionString(connectionString).then(function (client) {
        console.log("Successully created the EventHub Client from iothub connection string.");
        ehClient = client;
        return ehClient.getPartitionIds();
      }).then(function (ids) {
          console.log("The partition ids are: ", ids);
          return ids.map(function (id) {
            return ehClient.receive(id, printMessage, printError, { eventPosition: EventPosition.fromEnqueuedTime(Date.now()) });
      });
    }).catch(printError);

var printMessage = function (message) {
  //mainWindow.webContents.send('new_data',{ body : message.body , type : message.applicationProperties.reqtype ,from :'with' });
  mainWindow.send('new_data',{ body : message.body , type : message.applicationProperties.reqtype  });
};
//#endregion

function createWindow() {
  mainWindow = new BrowserWindow( {width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  //mainWindow.setFullScreen(true);
  mainWindow.isMenuBarVisible(false);
  mainWindow.on('closed', () => { 
            mainWindow.localStorage.clear()
            mainWindow = null,
            window.localStorage.clear()
 });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});