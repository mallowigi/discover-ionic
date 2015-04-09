/**
 * Created by eliorb on 04/04/2015.
 */
import '../discover/discoverModule.js';
import '../favorites/favoritesModule.js';
import TabsCtrl from './TabsCtrl';

export default angular.module('discover.tabs', [
  'discover.discover',
  'discover.favorites'
])
  .controller({
    TabsCtrl: TabsCtrl
  });

