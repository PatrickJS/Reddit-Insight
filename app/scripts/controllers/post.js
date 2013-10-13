;(function(app) {
'use strict';

app.controller('PostCtrl', function($scope) {

  $scope.urlState = false;

  $scope.trackingUrl = '';

  $scope.redditData = {}

  $scope.intervalTime = 3000;


});



}(angular.module('controllers')));
