module.exports = {
  publicPath: './',
  lintOnSave: false, // 关闭语法检查
  pluginOptions: {
      electronBuilder: {
        nodeIntegration: true,
        builderOptions: {
          // options placed here will be merged with default configuration and passed to electron-builder
          extraResources: [], // 客户端配置文件
          productName: process.env.VUE_APP_PROJECT_NAME, // 应用程序名称
          appId: 'com.andry.vr', // 包名
          copyright: 'Copyright © 2021 wj', // 版权信息
          directories: { // 输出文件夹
            output: 'dist_electron'
          },
          win: { // Windows平台
            icon: 'public/andry.png',
            target: {
              target: 'nsis', // 打包为nsis安装文件,
              arch: [
                'x64', // 默认为64位
                'ia32'
              ] // 支持32、64位的Windows系统
            }
          },
          linux: { // Linux平台
            icon: 'public/andry.png'
          },
          mac: {  // Mac平台
            icon: 'public/andry.icns',
            target: 'dmg'
          },
          nsis: {
            oneClick: false, // 是否一键安装
            allowToChangeInstallationDirectory: true, // 允许用户选择安装位置
            createDesktopShortcut: true, // 创建桌面图标
            createStartMenuShortcut: true, // 创建开始菜单图标
          }
        }
      }
  },
  devServer: {
    disableHostCheck: true,
    port: "62126", // 端口号
    host: "0.0.0.0", // 本地和局域网
    https: false,
    open: false // 自动打浏览器
  }
}