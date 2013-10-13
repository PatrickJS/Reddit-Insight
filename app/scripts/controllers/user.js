;(function(app) {
'use strict';

app.controller('UserCtrl', function($scope, $location) {

  $scope.submitUser = function(username) {
    $location.path('/trackuser/'+username);
  }


});



}(angular.module('controllers')));
