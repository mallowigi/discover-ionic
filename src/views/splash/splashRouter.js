/**
 * Created by eliorb on 11/04/2015.
 */
function splashRouter ($stateProvider) {
  $stateProvider
    .state('splash', {
      url: '/',
      templateUrl: 'www/views/splash/splash.html',
      controller: 'SplashCtrl as splashCtrl',
      onEnter: ['$state', 'User', function ($state, User) {
        if (User.session_id) {
          $state.go('tab.discover');
        }
      }]
    }
  )

}

export default ['$stateProvider', splashRouter];
