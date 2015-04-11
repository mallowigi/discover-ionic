var $http, $log, SERVER, AudioPlayer, $ionicLoading;

/**
 * Recommendations
 */
class Recommendations {

  constructor (_$http_, _$log_, _SERVER_, _AudioPlayer_, _$ionicLoading_) {
    $http = _$http_;
    $log = _$log_;
    SERVER = _SERVER_;
    AudioPlayer = _AudioPlayer_;
    $ionicLoading = _$ionicLoading_;

    this.queue = [];
  }

  /**
   * Fetch and return songs
   */
  fetchSongs () {
    // Show loader
    $ionicLoading.show({
      template: '<i class="ion-loading-c"></i>',
      noBackdrop: true
    });

    return $http.get(`${SERVER}/recommendations`)
      .success((data) => {
        this.queue = this.queue.concat(data);
      })
      .finally(() => {
        $ionicLoading.hide();
      });
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

export default ['$http', '$log', 'SERVER', 'AudioPlayer', '$ionicLoading', Recommendations];
