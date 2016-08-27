angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {
    console.log('shorten addLink');
    Links.addOne(url);
  };

});
