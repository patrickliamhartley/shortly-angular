angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // console.log('LinksController called');
  $scope.data = {};

  $scope.getAll = function () {
    // console.log('getAll called');
    Links.getAll()
      .then( function (linkArray) {
        $scope.data.links = linkArray;
      });
  };

  $scope.getAll();

});
