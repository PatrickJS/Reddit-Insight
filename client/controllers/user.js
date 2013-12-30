'use strict';

angular.module('controllers')
.controller('UserCtrl', function($scope, $location) {

  $scope.submitUser = function(username) {
    $location.path('/trackuser/'+username);
  };


});



