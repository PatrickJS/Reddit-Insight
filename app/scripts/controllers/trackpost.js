;(function(app) {
'use strict';

app.controller('TrackPostCtrl', function($scope, $interval, Reddit) {

  $scope.urlState = false;

  $scope.trackingUrl = '';

  $scope.redditData = {}

  $scope.intervalTime = 3000;

  $scope.cancelPolling = function(urlState) {

    intervalStop();
    $scope.urlState = !urlState;

  };

  $scope.submitLink = function(url) {

    $scope.$log.info('link ', url);

    intervalStop();
    intervalStart(url);


  };

  var prevousInterval = null;

  function intervalStop() {

    $interval.cancel(prevousInterval);

  }

  function intervalStart(url) {

    $scope.urlState = true;

    var prevousInterval = $interval(function() {
      Reddit.trackPost(url).then(function(response) {
        $scope.$log.info('trackpostctrl: ', response);

        $scope.redditData = response.data[0].data.children[0].data
        $scope.$emit('trackpost', url);
      });
    }, $scope.intervalTime);

  }

});



}(angular.module('controllers')));
