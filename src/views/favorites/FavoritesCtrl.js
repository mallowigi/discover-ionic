var $window;

class FavoritesCtrl {
  constructor (_$window_, User) {
    'use strict';
    $window = _$window_;

    this.User = User;
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

  getFavorites () {
    return this.User.getSongs()
      .success((songs) => this.favorites = songs);
  }
}

export default ['$window', 'User', FavoritesCtrl];
