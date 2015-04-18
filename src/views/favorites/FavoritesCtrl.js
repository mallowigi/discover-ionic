var $window, $ionicActionSheet;

function shareFacebook() {

}

function shareTwitter() {

}

class FavoritesCtrl {
  constructor (_$window_, User, _$ionicActionSheet_) {
    'use strict';
    $window = _$window_;

    this.User = User;

    $ionicActionSheet = _$ionicActionSheet_;
  }

  removeSong (song, index) {
    this.User.removeSong(song, index);
  }

  get favorites () {
    return this.User.favorites;
  }

  set favorites (favorites) {
    this.User.favorites = favorites;
  }

  openInSpotify (song) {
    song.open_url && $window.open(song.open_url, '_blank');
  }

  get username () {
    return this.User.username;
  }

  logout () {
    this.User.destroySession();

    // Instead of $state.go to provoke full reload
    $window.location.href = '/';
  }

  share ($event) {
    $event.stopPropagation();

    var socialNetworks = [
      { text: 'Share on Facebook', handler: shareFacebook},
      { text: 'Share on Twitter', handler: shareTwitter}
    ];

    // Show returns a callback to hide the actionsheet
    this.hideSheet = $ionicActionSheet.show({
      buttons: socialNetworks,
      titleText: 'Share song',
      cancelText: 'Cancel',
      buttonClicked: _.bind(function (index) {
        let handler = socialNetworks[index] && socialNetworks[index].handler;
        handler.call(this);

        this.hideSheet();
      }, this)
    })
  }
}

export default ['$window', 'User', '$ionicActionSheet', FavoritesCtrl];
