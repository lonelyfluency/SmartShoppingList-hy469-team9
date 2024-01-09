const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onGesture: (callback) => ipcRenderer.on('gesture', (_event, value) => callback(value))
})