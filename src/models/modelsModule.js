import '../config/configModule.js';
import '../services/servicesModule.js';

import User from "./User.js";
import Recommendations from "./Recommendations.js";

export default angular.module('discover.models', [
  'ionic',

  'discover.config',
  'discover.services'
])
  .service('User', User)
  .service('Recommendations', Recommendations)
;
