app.service('StarWarsService', ['$http', function($http) {
  this.getPlanets = function() {
    var req = {
      url: "http://swapi.co/api/planets/",
      method: "GET",
      params: {}
    };

    return $http(req);
  }
  this.getMovies = function() {
    var req = {
      url: "http://swapi.co/api/films/",
      method: "GET",
      params: {}
    };

    return $http(req);
  }
}]);
