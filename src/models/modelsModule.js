/**
 * Created by eliorb on 06/04/2015.
 */
import User from "./User.js";

var modelsModule = angular.module('discover.models', [])
  .service('User', User);

export default modelsModule;
