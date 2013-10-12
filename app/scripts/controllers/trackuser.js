;(function(app) {
'use strict';

app.controller('TrackUserCtrl', function($scope, Reddit) {

  $scope.usernameState = false;

  $scope.username = '';

  $scope.redditData = {}

  $scope.submitUser = function(username) {
    console.log('username ', username);
    Reddit.trackUser(username).then(function(response) {
      console.log('trackuserctrl: ', response);
      $scope.redditData.user = response.data.data;
      $scope.usernameState = true;
    });
  };

  $scope.userOverview = function(username) {
    console.log('overview ', username);
    Reddit.userOverview(username).then(function(response) {
      console.log('trackuserctrl: ', response);
      $scope.redditData.user = response.data.data;
      $scope.usernameState = true;
    });
  };


});



}(angular.module('controllers')));
