var AudioPlayer;

class TabsCtrl {
  constructor (_AudioPlayer_) {
    AudioPlayer = _AudioPlayer_;
  }

  /**
   * Stop audio on switching tab
   */
  onFavorites () {
    AudioPlayer.pauseAudio();
  }

}

export default ['AudioPlayer', TabsCtrl];
