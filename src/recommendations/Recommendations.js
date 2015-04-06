var $http, SERVER;

class Recommendations {

  constructor (_$http_, _SERVER_) {
    $http = _$http_;
    SERVER = _SERVER_;

    this.queue = [];
  }

  fetchSongs () {
    return $http.get(`${SERVER.URL}/recommendations`)
      .success((data) => {
        this.queue = this.queue.concat(data);
      })
  }

}

export default ['$http', 'SERVER', Recommendations];
