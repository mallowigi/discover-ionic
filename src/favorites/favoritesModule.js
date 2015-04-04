import FavoritesCtrl from './FavoritesCtrl';

var favoritesModule = angular.module('discover.favorites', [])
  .controller({
    FavoritesCtrl: FavoritesCtrl
  });

export default favoritesModule;
