var $timeout;

class DiscoverController {

  constructor (_$timeout_, User, songs) {
    'use strict';
    $timeout = _$timeout_;

    // The User
    this.User = User;

    // List of songs
    this.songs = songs.data;

    this.currentSong = angular.copy(this.songs[0]);
  }

  sendFeedback (like) {
    'use strict';

    // Set the song as rated "like" and start animating
    this.currentSong.rated = like;
    this.currentSong.animating = true;

    // add song as favorite
    if (like) {
      this.User.addSong(this.currentSong);
    }

    $timeout(() => {
      var randomSong = Math.round(Math.random() * (this.songs.length - 1));
      this.currentSong = angular.copy(this.songs[randomSong]);
    }, 300);
  }
}

export default ['$timeout', 'User', 'songs', DiscoverController];
