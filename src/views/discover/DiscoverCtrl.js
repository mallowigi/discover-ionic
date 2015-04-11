var $timeout, User, Recommendations, AudioPlayer;

class DiscoverController {

  constructor (_$timeout_, _User_, _Recommendations_, _AudioPlayer_) {
    'use strict';
    $timeout = _$timeout_;

    // The User
    User = _User_;

    // List of recommendations
    Recommendations = _Recommendations_;

    // AudioPlayer
    AudioPlayer = _AudioPlayer_;

    // Keep instance of the current song
    this.currentSong = angular.copy(this.songs[0]);

    // Whether a song is playing
    this.isPlaying = false;
  }

  /**
   * Static method to get the songs from the Recommendations service
   * @returns {Array|*}
   */
  get songs () {
    return Recommendations.queue;
  }

  /**
   * Send feedback about current song
   * @param like
   */
  sendFeedback (like) {
    'use strict';

    // Set the song as rated "like" and start animating
    this.currentSong.rated = like;
    this.currentSong.animating = true;

    // add song as favorite
    if (like) {
      User.addSong(this.currentSong);
    }

    // Call next song
    this.nextSong();

    $timeout(() => {
      this.currentSong = this.songs[0];
    }, 300);
  }

  /**
   * Static method to get the next image in the queue
   * @returns {*}
   */
  get nextImage () {
    if (this.songs.length > 1) {
      return this.songs[1].image_large;
    }

    return '';
  }

  /**
   * Skips to next song
   */
  nextSong () {
    this.isPlaying = false;
    Recommendations.nextSong();
  }

  /**
   * Play or pause current song
   */
  playPauseSong () {
    if (this.isPlaying) {
      AudioPlayer.pauseAudio(this.currentSong);
    } else {
      // Load and play song
      AudioPlayer.loadAndPlay(this.currentSong)
        .then(() => this.currentSong.loaded = true);
    }

    this.isPlaying = !this.isPlaying;
  }
}

export default ['$timeout', 'User', 'Recommendations', 'AudioPlayer', DiscoverController];
