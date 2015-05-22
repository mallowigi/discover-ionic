/**
 * Created by eliorb on 14/05/2015.
 */
export class MainController {
  /**
   * Expose global services
   * @param _$rootScope_
   * @param _$state_
   * @param _$log_
   * @param _$timeout_
   */
  constructor (_$rootScope_, _$state_, _$log_, _$timeout_) {
    this.$rootScope = _$rootScope_;
    this.$state = _$state_;
    this.$log = _$log_;
    this.$timeout = _$timeout_;
  }

}

export default ['$rootScope', '$state', '$log', '$timeout', MainController];
