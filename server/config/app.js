'use strict';
const exportConfig = require('./exportConfig');
const appConfig = {
  default: {
    DEFAULT_LANGUAGE: 'en',
    APP_CACHE:        604800000//a week
  },
  development: {
    COOKIE_NAME:      'acWebsiteDev',
    LOG_LEVEL:        'silly',
    HOST:             'https://localhost:3000'
  },
  production: {
    LOG_LEVEL:        'info',
    HOST:             'https://www.myapp.com'
  }
}
module.exports = exportConfig(appConfig);