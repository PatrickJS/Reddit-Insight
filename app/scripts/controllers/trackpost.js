;(function(app) {
'use strict';

app.controller('TrackPostCtrl', function($scope, Reddit) {

  $scope.urlState = false;

  $scope.redditData = {}

  $scope.submitLink = function(url) {
    console.log('link ', url);
    Reddit.trackPost(url).then(function(response) {
      console.log('trackpostctrl: ', response);
      $scope.$emit('trackpost', url);
      $scope.redditData = response.data[0].data.children[0].data
      $scope.urlState = true;
    });
  };

  $scope.trackingUrl = '';

  $scope.url = 'lol';

});



}(angular.module('controllers')));
