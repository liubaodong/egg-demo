/* eslint valid-jsdoc: "off" */

'use strict';
const os = require('os');
//获取本机ip
function getIpAddress() {
  /**os.networkInterfaces() 返回一个对象，该对象包含已分配了网络地址的网络接口 */
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}
const myHost = getIpAddress();
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 使用ip启动程序
  config.cluster = {
    listen: {
      port: 7001,
      hostname: myHost
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598779027434_3349';

  // add your middleware config here
  config.middleware = ['errorHandler'],
    // 配置报错中间件
    config.errorHandler = {
      // 只检测含api的接口
      match: '/api',
    },
    // 配置跨域
    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      domainWhiteList: ['*']//[]中放放出的白名单，*代表所有
    };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/egg-demo', // 你的数据库地址，first-egg是你数据库得名字
      options: {
        useNewUrlParser: true,
      },
    },
  };
  // 配置swagger html文档
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '--接口文档--',
      description: '--swaggerdoc--',
      version: '1.0.0',
    },
    schemes: ['http'],
    enable: true,
    routerMap: true,
  };
  // 配置错误处理
  config.validate = {
    convert: true,
    validateRoot: false,
  };


  // 文件上传文件流的方式
  // config.multipart = {
  //   mode: 'stream', // 文件流
  //   fileSize: '50mb' // 最大5M
  // };
  // 文件上传file方式
  config.multipart = {
    mode: 'file', // file
    fileSize: '50mb', // 最大5M
    fileExtensions: ['xls'] //文件类型扩展
  };



  return {
    ...config,
    ...userConfig,
  };
};
