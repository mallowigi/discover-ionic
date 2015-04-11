class User {

  constructor () {
    'use strict';
    /**
     * List of favorites
     * @type {Array}
     */
    this.favorites = [];

    /**
     * Unread favorites
     * @type {number}
     */
    this.unread = 0;
  }

  addSong (song) {
    if (!song) {
      return false;
    }

    this.favorites.unshift(song);
    this.unread++;
  }

  removeSong (song, index) {
    if (!song) {return false;}

    if (index) {
      this.favorites.splice(index, 1);
    }

    if (this.unread > 0) {
      this.unread--;
    }
  }

  markAsRead () {
    this.unread = 0;
  }
}

export default [User];
