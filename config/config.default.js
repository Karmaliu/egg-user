'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524886501410_3252';

  // add your config here
  config.middleware = [];
  config.security = {
    domainWhiteList: [ 'http://localhost:8000' ],
  };
  return config;
};
