const { app, BrowserWindow } = require('electron');
const fs = require('fs');

app.on('ready', () => {
  const window = new BrowserWindow({ width: 800, height: 600 });
  window.webContents.loadURL('http://google.com/');
  window.webContents.addListener('dom-ready', () => window.capturePage(image => fs.writeFileSync('screenshot.png', image.toPNG())));
});

// Or from the renderer process in index.js/DevTools:
/*
{
  const electron = require('electron');
  electron.remote.getCurrentWindow().capturePage(image => {
    //electron.clipboard.writeImage(image);
    electron.clipboard.writeText(image.toDataURL());
    console.log('Data URL is in clipboard.');
  });
}
*/
