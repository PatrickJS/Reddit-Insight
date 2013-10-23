'use strict';

 angular.module('controllers')
  .controller('MainCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      var path = $location.path().split('/');
      path = '/'+path[1];
      return route === path;
    }
  });
