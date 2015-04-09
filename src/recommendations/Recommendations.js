var $http, $log, SERVER, AudioPlayer;

/**
 * Recommendations
 */
class Recommendations {

  constructor (_$http_, _$log_, _SERVER_, _AudioPlayer_) {
    $http = _$http_;
    $log = _$log_;
    SERVER = _SERVER_;
    AudioPlayer = _AudioPlayer_;

    this.queue = [];
  }

  /**
   * Fetch and return songs
   */
  fetchSongs () {
    return $http.get(`${SERVER}/recommendations`)
      .success((data) => {
        this.queue = this.queue.concat(data);
      }
    );
  }

  nextSong () {
    // Remove from the queue
    this.queue.shift();

    // Pause audio
    AudioPlayer.pauseAudio();

    if (this.queue.length <= 3) {
      $log.info('Fetching new songs...');
      this.fetchSongs();
    }
  }

}

export default ['$http', '$log',  'SERVER', 'AudioPlayer', Recommendations];
