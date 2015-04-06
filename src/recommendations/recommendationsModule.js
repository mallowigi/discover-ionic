import config from '../config/constants.js';
import Recommendations from "./Recommendations.js";

var recommendationsModule = angular.module('discover.recommendations', [])
  .service('Recommendations', Recommendations);

export default recommendationsModule;
