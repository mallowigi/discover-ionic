/**
 * Created by eliorb on 04/04/2015.
 */
import '../discover/discoverModule.js'
import '../favorites/favoritesModule.js'
import TabsCtrl from './TabsCtrl'


var tabsModule = angular.module('discover.tabs', ['discover.discover', 'discover.favorites']);
tabsModule.controller({
  TabsCtrl: TabsCtrl
});

export default tabsModule;
