class User {

  constructor () {
    'use strict';
    this.favorites = [];
  }

  addSong (song) {
    if (!song) {
      return false;
    }

    this.favorites.unshift(song);
  }

  removeSong (song, index) {
    if (!song) {return false;}

    if (index) {
      this.favorites.splice(index, 1);
    }
  }
}

export default [User];
