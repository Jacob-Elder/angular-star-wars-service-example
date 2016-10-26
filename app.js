var app = angular.module("ServiceApp", []);
app.controller("HomeCtrl", ['$scope', 'StarWarsService', function($scope, StarWarsService) {
  $scope.stuff = "yeah.";
  $scope.movies = [];
  $scope.planets = [];

  StarWarsService.getPlanets().then(function(response) {
    $scope.planets = response.data.results;
  });
  StarWarsService.getMovies().then(function(response) {
    $scope.movies = response.data.results;
  });

  $scope.expand = function(movie) {
    movie.isExpanded = true;
    console.log("movie:", movie);
  }

  $scope.collapse = function(movie) {
    movie.isExpanded = false;
  }

}]);
