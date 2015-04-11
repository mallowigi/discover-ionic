import '../../models/modelsModule.js';

import favoritesRouter from './favoritesRouter.js';
import FavoritesCtrl from './FavoritesCtrl';

export default angular.module('discover.favorites', [
  'ionic',

  'discover.models'
])
  .config(favoritesRouter)
  .controller({
    FavoritesCtrl: FavoritesCtrl
  });
