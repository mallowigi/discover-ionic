function appRouter ($stateProvider, $urlRouterProvider) {
  'use strict';

  // If none of the above states are matched, use this as the fallback:
  $urlRouterProvider.otherwise('/');

}

export default ['$stateProvider', '$urlRouterProvider', appRouter];
