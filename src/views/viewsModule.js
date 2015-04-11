import './tabs/tabsModule.js';
import './discover/discoverModule.js';
import './favorites/favoritesModule.js';
import './splash/splashModule.js';

export default angular.module('discover.views', [
  'discover.tabs',
  'discover.discover',
  'discover.favorites',
  'discover.splash'
])

