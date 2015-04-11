import '../../config/configModule.js';
import '../../models/modelsModule.js';
import '../../services/servicesModule.js';

import discoverRouter from './discoverRouter.js';
import DiscoverCtrl from './DiscoverCtrl'

export default angular.module('discover.discover', [
  'ionic',

  'discover.config',
  'discover.models',
  'discover.services'
])
  .config(discoverRouter)
  .controller({
    DiscoverCtrl: DiscoverCtrl
  });
