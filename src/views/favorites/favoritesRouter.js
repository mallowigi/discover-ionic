/**
 * Created by eliorb on 11/04/2015.
 */
function favoritesRouter ($stateProvider) {
  $stateProvider
    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'www/views/favorites/favorites.html',
          controller: 'FavoritesCtrl as favoritesCtrl'
        }
      }
    }
  );
}

export default ['$stateProvider', favoritesRouter];
