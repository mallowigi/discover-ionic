var $http, SERVER, $localStorage;

class User {

  constructor (_$http_, _SERVER_, _localStorageService_) {

    // Services
    $http = _$http_;
    SERVER = _SERVER_;
    $localStorage = _localStorageService_;

    /**
     * The username
     * @type {string}
     */
    this.username = '';

    /**
     * The access token
     * @type {null}
     */
    this.session_id = null;

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
    var authPromise;

    if (!username) {
      throw Error('Auth: Username is undefined');
    }

    if (isSignUp) {
      authPromise = this.signup(username);
    } else {
      authPromise = this.signin(username);
    }

    return authPromise.success((session) => {
      // Fill this with session data
      this.saveSession(session);
    });
  }

  signup (username) {
    return $http.post(`${SERVER}/signup`, {username});
  }

  signin (username) {
    return $http.post(`${SERVER}/login`, {username});
  }

  getSongs () {
    return $http.get(`${SERVER}/favorites`, {
      params: {session_id: this.session_id}
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
    return $http.post(`${SERVER}/favorites`, {session_id: this.session_id, song_id: song.song_id});
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
      params: {session_id: this.session_id, song_id: song.song_id}
    });
  }

  markAsRead () {
    this.unread = 0;
  }

  saveSession (session) {
    _.assign(this, session);

    $localStorage.set('user', {username: this.username, session_id: this.session_id})
  }

  getSession () {
    return new Promise((resolve, reject) => {

        // If user already has a session id return it
        if (this.session_id) {
          resolve(this);
        }

        // Check in the localstorage
        let user = $localStorage.get('user');
        if (user && user.session_id) {
          _.assign(this, user);

          // Fetch favorites
          resolve(this.getSongs());
        } else {
          reject(this);
        }
      }
    );
  }

  destroySession () {
    this.username = '';
    delete this.session_id;
    this.favorites = [];
    this.unread = 0;

    $localStorage.set('user', {});

  }
}

export default ['$http', 'SERVER', 'localStorageService', User];
