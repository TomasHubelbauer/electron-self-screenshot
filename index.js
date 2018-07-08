const { app, BrowserWindow } = require('electron');

app.on('ready', launchInfo => {
  const window = new BrowserWindow({ width: 800, height: 600 });
  // https://github.com/electron/electron/issues/1602
  window.webContents.loadURL('http://hubelbauer.net/');
  setTimeout(() => {
    window.capturePage(image => {
      const dataUrl = image.toDataURL();
      window.webContents.loadURL(dataUrl);
    });
  }, 1000);
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
