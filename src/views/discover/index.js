import '../../config';
import '../../models';
import '../../services';

import discoverRouter from './discoverRouter.js';
import DiscoverCtrl from './DiscoverCtrl'

export default angular.module('discover.discover', [
  'ionic',
  'ionic.contrib.ui.tinderCards',

  'discover.config',
  'discover.models',
  'discover.services'
])
  .config(discoverRouter)
  .controller({
    DiscoverCtrl: DiscoverCtrl
  });
