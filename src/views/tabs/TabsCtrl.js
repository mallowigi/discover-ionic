var AudioPlayer;

export class TabsCtrl {
  constructor (_AudioPlayer_, User) {
    AudioPlayer = _AudioPlayer_;

    this.User = User;
  }

  onFavorites () {
    /**
     * Stop audio on switching tab
     */
    AudioPlayer.pauseAudio();

    /** Reset unread */
    this.User.markAsRead();
  }

  get unread () {
    return this.User.unread;
  }

}

export default ['AudioPlayer', 'User', TabsCtrl];
