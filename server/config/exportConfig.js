'use strict';
module.exports = function (configObj) {
  const env = process.env.NODE_ENV || 'development';
  const defaultObj = configObj.default || {};
  const envObj = configObj[env] || {};
  return Object.assign(defaultObj, envObj);
};