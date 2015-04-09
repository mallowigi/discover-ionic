import '../config/configModule.js';
import '../recommendations/recommendationsModule.js';
import '../models/modelsModule.js';

import DiscoverCtrl from './DiscoverCtrl'

export default angular.module('discover.discover', [
  'discover.config',
  'discover.models',
  'discover.recommendations'
])
  .controller({
    DiscoverCtrl: DiscoverCtrl
  });
