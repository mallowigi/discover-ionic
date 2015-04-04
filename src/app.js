import routes from './router.js';

export var app = angular.module('discover', ['ionic'])
  .config(['$stateProvider', '$urlRouterProvider', routes])

  .run(function ($ionicPlatform) {
    'use strict';
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

