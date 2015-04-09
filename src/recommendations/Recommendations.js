var $http, SERVER;

/**
 * Recommendations
 */
class Recommendations {

  constructor (_$http_, _SERVER_) {
    $http = _$http_;
    SERVER = _SERVER_;

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

}

export default ['$http', 'SERVER', Recommendations];
