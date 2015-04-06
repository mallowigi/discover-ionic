class FavoritesCtrl {
  constructor (User) {
    'use strict';

    this.User = User;
  }

  removeSong (song, index) {
    this.User.removeSong(song, index);
  }

  get favorites () {
    return this.User.favorites;
  }
}

export default ['User', FavoritesCtrl];
