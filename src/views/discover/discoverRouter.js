function discoverRouter ($stateProvider) {
  // Each tab has its own nav history stack:
  $stateProvider.state('tab.discover', {
    url: '/discover',
    views: {
      'tab-discover': {
        templateUrl: 'www/views/discover/discover.html',
        controller: 'DiscoverCtrl as discoverCtrl',
        resolve: {
          songs: ['Recommendations', function (Recommendations) {
            return Recommendations.fetchSongs();
          }]
        }

      }
    }
  });
}

export default ['$stateProvider', discoverRouter]
