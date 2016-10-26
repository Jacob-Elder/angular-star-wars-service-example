var app = angular.module("ServiceApp", []);
app.controller("HomeCtrl", ['$scope', 'StarWarsService', function($scope, StarWarsService) {
  $scope.stuff = "yeah.";
  $scope.movies = [];

  $scope.isExpanded = false;

  $scope.expand = function(movie) {
    movie.isExpanded = true;
  }

  $scope.collapse = function(movie) {
    movie.isExpanded = false;
  }

  StarWarsService.getMovies().then(function(response) {
    console.log("response:", response);
    $scope.movies = response.data.results;
  });
}]);
