/**
 * Created by eliorb on 11/04/2015.
 */
function tabsRouter ($stateProvider) {

  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'www/views/tabs/tabs.html',
      controller: 'TabsCtrl as tabsCtrl'
    })

}

export default ['$stateProvider', tabsRouter];
