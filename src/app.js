// Add modules
import './config/configModule.js';
import './models/modelsModule.js';
import './recommendations/recommendationsModule.js';
import './tabs/tabsModule.js';

import run from './run';
import appRouter from './config/appRouter';

// The app modules
var modules = [
  'ionic'

  // ng templates
  , 'templates'

  // app modules here
  , 'discover.config'
  , 'discover.models'
  , 'discover.recommendations'
  , 'discover.tabs'

];

export default angular.module('discover', modules)
  .config(appRouter)
  .run(run);

