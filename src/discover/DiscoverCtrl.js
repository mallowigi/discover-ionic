var $timeout;

class DiscoverController {

  constructor (_$timeout_, User, Recommendations) {
    'use strict';
    $timeout = _$timeout_;

    // The User
    this.User = User;

    // List of recommendations
    this.Recommendations = Recommendations;

    // Keep instance of the current song
    this.currentSong = angular.copy(this.songs[0]);
  }

  get songs () {
    return this.Recommendations.queue;
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

    // Call next song
    this.Recommendations.nextSong();

    $timeout(() => {
      this.currentSong = this.songs[0];
    }, 300);
  }

  nextImage () {
    if (this.songs.length > 1) {
      return this.songs[1].image_large;
    }

    return '';
  }
}

export default ['$timeout', 'User', 'Recommendations', DiscoverController];
