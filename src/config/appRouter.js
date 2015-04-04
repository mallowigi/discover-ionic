var appRouter = ['$stateProvider', '$urlRouterProvider', function mainRouter ($stateProvider, $urlRouterProvider) {
  'use strict';

  // Ionic uses AngularUI Router, which uses the concept of states.
  // Learn more here: https://github.com/angular-ui/ui-router.
  // Set up the various states in which the app can be.
  // Each state's controller can be found in controllers.js.
  $stateProvider

    // Set up an abstract state for the tabs directive:
    .state('tab', {
      url: '/tab',
      templateUrl: 'www/tabs/tabs.html',
      controller: 'TabsCtrl'
    })
    //
    //// Each tab has its own nav history stack:
    //
    //.state('tab.discover', {
    //  url: '/discover',
    //  views: {
    //    'tab-discover': {
    //      templateUrl: 'discover/discover.html',
    //      controller: 'DiscoverCtrl'
    //    }
    //  }
    //})
    //
    //.state('tab.favorites', {
    //  url: '/favorites',
    //  views: {
    //    'tab-favorites': {
    //      templateUrl: 'templates/favorites.html',
    //      controller: 'FavoritesCtrl'
    //    }
    //  }
    //});
  // If none of the above states are matched, use this as the fallback:
  $urlRouterProvider.otherwise('/tab');

}];

export default appRouter;
