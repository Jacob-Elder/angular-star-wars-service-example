app.service('StarWarsService', ['$http', function($http) {
  this.getMovies = function() {
    var req = {
      url: "http://swapi.co/api/films/",
      method: "GET",
      params: {}
    };

    return $http(req);
  }
}]);
