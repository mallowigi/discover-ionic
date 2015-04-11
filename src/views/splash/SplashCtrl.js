/**
 * Created by eliorb on 11/04/2015.
 */
var User, $state;

class SplashCtrl {
  constructor (_User_, _$state_) {
    // services
    User = _User_;
    $state = _$state_;

    this.username = '';
    this.isSignUp = false;
  }

  submitForm () {
    User.auth(this.username, this.isSignUp)
      .then(() => {
        // on success change state
        $state.go('tab.discover');
      })
      .catch((error) => {
        this.error = error;
      })
  }
}

export default ['User', '$state', SplashCtrl];
