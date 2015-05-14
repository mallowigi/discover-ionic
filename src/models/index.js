import '../config';
import '../services';

import User from "./User.js";
import Recommendations from "./Recommendations.js";

export default angular.module('discover.models', [
  'ionic',
  'LocalStorageModule',

  'discover.config',
  'discover.services'
])
  .service('User', User)
  .service('Recommendations', Recommendations)
;
