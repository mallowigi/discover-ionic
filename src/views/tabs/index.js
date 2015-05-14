/**
 * Created by eliorb on 04/04/2015.
 */
import '../../models';
import '../../services';

import tabsRouter from './tabsRouter.js';
import TabsCtrl from './TabsCtrl';

export default angular.module('discover.tabs', [
  'ionic',

  'discover.models',
  'discover.services'
])
  .config(tabsRouter)
  .controller({
    TabsCtrl: TabsCtrl
  });

