const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  const screenElectron = electron.screen;
  const mainScreen = screenElectron.getPrimaryDisplay();
  const dimensions = mainScreen.size;
  
  mainWindow = new BrowserWindow({
    height: dimensions.height,
    width: dimensions.width
  })

  // load the local HTML file
  let url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').join(__dirname, 'index.html')
  })
  console.log(url)
  mainWindow.loadURL(url)
})
