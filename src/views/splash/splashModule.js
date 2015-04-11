/**
 * Created by eliorb on 11/04/2015.
 */
import '../../models/modelsModule.js';

import splashRouter from './splashRouter.js';
import SplashCtrl from './SplashCtrl';

export default angular.module('discover.splash', [
  'ionic',

  'discover.models'
])
  .config(splashRouter)
  .controller('SplashCtrl', SplashCtrl);
