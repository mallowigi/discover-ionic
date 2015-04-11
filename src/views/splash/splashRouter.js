/**
 * Created by eliorb on 11/04/2015.
 */
function splashRouter ($stateProvider) {
  $stateProvider
    .state('splash', {
      url: '/',
      templateUrl: 'www/views/splash/splash.html',
      controller: 'SplashCtrl as splashCtrl'
    }
  )

}

export default ['$stateProvider', splashRouter];
