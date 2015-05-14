// Add modules
import './config';
import './models';
import './services';
import './directives';
import './views';

import run from './run';

// The app modules
var modules = [
  // ng templates
  , 'templates'

  // app modules here
  , 'discover.config'
  , 'discover.models'
  , 'discover.services'
  , 'discover.directives'
  , 'discover.views'

];

export default angular.module('discover', modules)
  .run(run);

