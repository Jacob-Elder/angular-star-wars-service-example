app.service('StarWarsService', ['$http', function($http) {
  this.getPlanets = function() {
    return apiRequest("planets");
  }
  this.getMovies = function() {
    return apiRequest("films");
  }

  function apiRequest(path) {
    var req = {
      url: "http://swapi.co/api/" + path,
      method: "GET",
      params: {}
    };

    return $http(req);
  }
}]);
