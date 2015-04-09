import '../player/playerModule.js';

import config from '../config/constants.js';
import Recommendations from "./Recommendations.js";

export default angular.module('discover.recommendations', [
  'discover.player'
])
  .service('Recommendations', Recommendations);
