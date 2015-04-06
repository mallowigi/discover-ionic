import constants from './constants.js';

var config = angular.module('discover.config', [])
  .constant('SERVER', constants);

export default config;
