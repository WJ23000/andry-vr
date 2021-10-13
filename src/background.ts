"use strict";

import { app, protocol, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

let win, childWin;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:62126`
    : `file://${__dirname}/index.html`;

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // 设置为false隐藏标题栏和菜单栏
    resizable: true, // 设置为false关闭拖拽窗口边框改变窗口大小
    icon: path.join(__static, "andry.png"), // 设置icon
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true, // 设置为false解决打包后ctrl+shift+i使用devtools开发者工具
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
  // 关闭开发者工具使用
  // win.webContents.closeDevTools();
}

// 监听渲染进程发送的退出应用事件并接收参数
ipcMain.on("close", (event, res) => {
  console.log("来自于渲染进程", res);
  app.exit();
});

// 监听渲染进程发送的最大化事件并接收参数
ipcMain.on("custom-max", (event, res) => {
  console.log("来自于渲染进程", res);
  win.maximize();
});

// 监听渲染进程发送的还原事件并接收参数
ipcMain.on("custom-reset", (event, res) => {
  console.log("来自于渲染进程", res);
  if (win.isMaximized()) {
    win.unmaximize();
  }
});

// 监听渲染进程发送的最小化事件并接收参数
ipcMain.on("custom-min", (event, res) => {
  console.log("来自于渲染进程", res);
  win.minimize();
});

// 子窗口
function openChild(path) {
  childWin = new BrowserWindow({
    width: 800,
    height: 600,
    parent: win, // 子窗口一直保持在父窗口上方
    modal: true, // 阻止对父窗口的操作
    frame: false, // 设置为false隐藏标题栏和菜单栏
    resizable: true, // 设置为false关闭拖拽窗口边框改变窗口大小
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true, // 设置为false解决打包后ctrl+shift+i使用devtools开发者工具
    },
  });

  childWin.loadURL(winURL + `#/${path}`);

  // 关闭开发者工具使用
  // childWin.webContents.closeDevTools();
}

// 监听渲染进程发送的显示子窗口事件并接收参数
ipcMain.on("openChild", (event, res) => {
  console.log("来自于渲染进程", res);
  openChild(res);
});

// 监听渲染进程发送的关闭子窗口事件并接收参数
ipcMain.on("closeChild", (event, res) => {
  console.log("来自于渲染进程", res);
  childWin.close();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
