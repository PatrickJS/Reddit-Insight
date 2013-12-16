;(function(app) {
'use strict';

app.controller('TrackUserCtrl', function($scope, $location, Reddit) {

  $scope.username = $scope.$routeParams.username;

  $scope.redditData = {};

  $scope.trackUser = function() {
    $location.path('/trackuser');
  };

  $scope.userOverview = function(username) {
    console.log('overview ', username);
    updateOverview(username);
  };

  function updateUser(username) {
    Reddit.trackUser(username).then(function(response) {
      console.log('trackuserctrl: ', response);
      $scope.redditData.user = response.data.data;
      $scope.userOverview(username);
    });
  };

  function updateOverview(username) {
    Reddit.userOverview(username).then(function(response) {
      console.log('trackuserctrl: ', response);
      $scope.redditData.overview = response.data.data.children;
      $scope.loadingOverview = true;
    });
  };

  console.log('username ', $scope.username);
  updateUser($scope.username);

});



}(angular.module('controllers')));
