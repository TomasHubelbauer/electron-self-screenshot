const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const screenshot = require('window-screenshot');

app.on('ready', launchInfo => {
  const window = new BrowserWindow({ width: 800, height: 600 });
  // https://github.com/electron/electron/issues/1602
  window.webContents.loadURL('http://hubelbauer.net/');
  setTimeout(() => {
    // window.capturePage(image => {
    //   const dataUrl = image.toDataURL();
    //   window.webContents.loadURL(dataUrl);
    // });
    screenshot(
      0, // 0 is for active window
      function (err, res) {
        if (err) throw err;

        fs.writeFile("result.png", res);
      });
  }, 5000);
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
