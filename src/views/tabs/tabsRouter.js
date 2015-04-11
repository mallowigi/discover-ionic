/**
 * Created by eliorb on 11/04/2015.
 */
function tabsRouter ($stateProvider) {

  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'www/views/tabs/tabs.html',
      controller: 'TabsCtrl as tabsCtrl',
      resolve: {
        session: ['User', function (User) {
          return User.getSession();
        }]
      },
      onEnter: ['User', '$state', function (User, $state) {
        // PRevent entering the state if no session
        User.getSession()
          .catch(() => $state.go('splash'));
      }]
    })

}

export default ['$stateProvider', tabsRouter];
