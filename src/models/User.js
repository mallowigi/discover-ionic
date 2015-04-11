var $http, SERVER;

class User {

  constructor (_$http_, _SERVER_) {

    // Services
    $http = _$http_;
    SERVER = _SERVER_;

    /**
     * The username
     * @type {string}
     */
    this.username = '';

    /**
     * The access token
     * @type {null}
     */
    this.sessionId = null;

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

  auth (username, isSignUp) {
    if (!username) {
      throw Error('Auth: Username is undefined');
    }

    if (isSignUp) {
      return this.signup(username);
    } else {
      return this.signin(username);
    }
  }

  signup (username) {
    return $http.post(`${SERVER}/signup`, {username});
  }

  signin (username) {
    return $http.post(`${SERVER}/login`, {username});
  }

  getSongs () {
    return $http.get(`${SERVER}/favorites`, {
      params: {session_id: this.sessionId}
    })
      // Save favorites
      .success((favorites) => this.favorites = favorites);
  }

  addSong (song) {
    if (!song) {
      return false;
    }

    this.favorites.unshift(song);
    this.unread++;

    // persist this to the server
    return $http.post(`${SERVER}/favorites`, {session_id: this.sessionId, song_id: song.song_id});
  }

  removeSong (song, index) {
    if (!song) {return false;}

    if (index) {
      this.favorites.splice(index, 1);
    }

    if (this.unread > 0) {
      this.unread--;
    }

    // Delete song from user favorites
    return $http.delete(`${SERVER}/favorites`, {
      params: {session_id: this.sessionId, song_id: song.song_id}
    });
  }

  markAsRead () {
    this.unread = 0;
  }
}

export default ['$http', 'SERVER', User];
