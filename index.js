const { app, BrowserWindow } = require('electron');

app.on('ready', launchInfo => {
  const window = new BrowserWindow({ width: 800, height: 600 });
  window.webContents.loadFile(__dirname + './index.html');
  setTimeout(() => {
    window.webContents.capturePage(image => {
      const dataUrl = image.toDataURL();
      window.webContents.loadURL(dataUrl);
    });
  }, 1000);
});
