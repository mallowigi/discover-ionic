function appRouter ($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider.state('main', {
    abstract: true,
    onEnter: ['User', '$state', function (User, $state) {
      // Get session and redirects
      User.getSession()
        .then(() => $state.go('tab.discover'))
        .catch(() => $state.go('splash'));
    }]
  })

  // If none of the above states are matched, use this as the fallback:
  $urlRouterProvider.otherwise('/');

}

export default ['$stateProvider', '$urlRouterProvider', appRouter];
