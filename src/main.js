// Add modules
import './config/configModule.js';
import './models/modelsModule.js';
import './services/servicesModule.js';
import './views/viewsModule.js';

import run from './run';

// The app modules
var modules = [
  // ng templates
  , 'templates'

  // app modules here
  , 'discover.config'
  , 'discover.models'
  , 'discover.services'
  , 'discover.views'

];

export default angular.module('discover', modules)
  .run(run);

