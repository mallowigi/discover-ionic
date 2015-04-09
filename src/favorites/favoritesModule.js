import '../models/User.js';

import FavoritesCtrl from './FavoritesCtrl';

export default angular.module('discover.favorites', [
  'discover.models'
])
  .controller({
    FavoritesCtrl: FavoritesCtrl
  });
