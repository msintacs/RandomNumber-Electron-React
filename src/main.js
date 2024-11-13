const { app, BrowserWindow } = require('electron');
const path = require('path') 

function createWindow () { 
  const win = new BrowserWindow({ 
    width: 900,
    height: 500,
    title: "Number Generator",
    titleBarStyle: "hidden",
    frame: false,
    titleBarOverlay: {
      color: "#1F2937",
      symbolColor: "#F9FAFB",
      height: 30,
    },
    trafficLightPosition: { x: 20, y: 20 },
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    },
  });

  const isDev = !app.isPackaged; 

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})