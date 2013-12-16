;(function(app) {
'use strict';

app.controller('TrackPostCtrl', function($scope, $location, $timeout, Reddit) {

  $scope.trackingUrl = 'http://www.reddit.com/r/'+$scope.$routeParams.subreddit+'/comments/'+$scope.$routeParams.post+'/'+$scope.$routeParams.title;

  $scope.redditData = {}

  $scope.intervalTime = 0;

  $scope.cancelPolling = function(urlState) {
    console.log('cancel');
    $timeout.cancel(prevousTimeout);
    $location.path('/trackpost');
  };


  $scope.$on('$locationChangeStart' , function() {
    console.log('location change start');
    $timeout.cancel(prevousTimeout);
  });

  var prevousTimeout = null;
  startPolling($scope.trackingUrl);

  function startPolling(url) {
    prevousTimeout = $timeout(function() {

      Reddit.trackPost(url).then(function(response) {
        $scope.$log.info('trackpostctrl: ', response);

        $scope.redditData = response.data[0].data.children[0].data
        $scope.$emit('trackpost', url);
        $scope.intervalTime = 3000;
        $timeout.cancel(prevousTimeout);
        startPolling(url);
        return this;
      });

    }, $scope.intervalTime);

  }


});



}(angular.module('controllers')));
