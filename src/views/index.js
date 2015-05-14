import './tabs';
import './discover';
import './favorites';
import './splash';

export default angular.module('discover.views', [
  'discover.tabs',
  'discover.discover',
  'discover.favorites',
  'discover.splash'
])

