import modules from './modules';
import run from './run';

var app = angular.module('discover', modules)
  .run(['$ionicPlatform', run]);

export default app;
