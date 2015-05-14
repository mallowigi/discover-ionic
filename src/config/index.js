import appRouter from './appRouter.js';
import {SERVER} from './constants.js';


export default angular.module('discover.config', [
  'ionic'
])
  .config(appRouter)
  .constant('SERVER', SERVER);

