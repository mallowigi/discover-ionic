var media;

class AudioPlayer {

  loadAndPlay (song) {
    return new Promise((resolve, reject) => {
      if (!song || !song.preview_url) {
        reject('Cannot play this song since there is no url!');
      }

      // Get preview url and create an htmlaudioelement
      media = new Audio(song.preview_url);

      media.addEventListener('loadeddata', () => {
        resolve();
      });

      media.play();

    });

  }

  pauseAudio () {
    media && media.pause();
  }
}

export default AudioPlayer;
