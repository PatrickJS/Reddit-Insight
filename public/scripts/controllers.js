'use strict';
angular.module('controllers').controller('AboutCtrl', [
  '$scope',
  'AboutPageService',
  function ($scope, AboutPageService) {
    $scope.aboutInfo = AboutPageService;
  }
]);'use strict';
angular.module('controllers').controller('MainCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
  }
]);'use strict';
angular.module('controllers').controller('PostCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.submitLink = function (url, index) {
      url = url.split('/');
      index = url.indexOf('comments');
      url = url.slice(index - 1).join('/');
      $location.path('/trackpost/' + url);
    };
  }
]);'use strict';
angular.module('controllers').controller('TrackPostCtrl', [
  '$scope',
  '$location',
  '$timeout',
  'Reddit',
  function ($scope, $location, $timeout, Reddit) {
    $scope.trackingUrl = 'http://www.reddit.com/r/' + $scope.$routeParams.subreddit + '/comments/' + $scope.$routeParams.post + '/' + $scope.$routeParams.title;
    $scope.redditData = {};
    $scope.intervalTime = 0;
    $scope.cancelPolling = function (urlState) {
      console.log('cancel');
      $timeout.cancel(prevousTimeout);
      $location.path('/trackpost');
    };
    $scope.$on('$locationChangeStart', function () {
      console.log('location change start');
      $timeout.cancel(prevousTimeout);
    });
    var prevousTimeout = null;
    startPolling($scope.trackingUrl);
    function startPolling(url) {
      prevousTimeout = $timeout(function () {
        Reddit.trackPost(url).then(function (response) {
          $scope.$log.info('trackpostctrl: ', response);
          $scope.redditData = response.data[0].data.children[0].data;
          $scope.$emit('trackpost', url);
          $scope.intervalTime = 3000;
          $timeout.cancel(prevousTimeout);
          startPolling(url);
          return this;
        });
      }, $scope.intervalTime);
    }
  }
]);'use strict';
angular.module('controllers').controller('TrackUserCtrl', [
  '$scope',
  '$location',
  'Reddit',
  function ($scope, $location, Reddit) {
    $scope.username = $scope.$routeParams.username;
    $scope.redditData = {};
    $scope.trackUser = function () {
      $location.path('/trackuser');
    };
    $scope.userOverview = function (username) {
      console.log('overview ', username);
      updateOverview(username);
    };
    function updateUser(username) {
      Reddit.trackUser(username).then(function (response) {
        console.log('trackuserctrl: ', response);
        $scope.redditData.user = response.data.data;
        $scope.userOverview(username);
      });
    }
    ;
    function updateOverview(username) {
      Reddit.userOverview(username).then(function (response) {
        console.log('trackuserctrl: ', response);
        $scope.redditData.overview = response.data.data.children;
        $scope.loadingOverview = true;
      });
    }
    ;
    console.log('username ', $scope.username);
    updateUser($scope.username);
  }
]);'use strict';
angular.module('controllers').controller('UserCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.submitUser = function (username) {
      $location.path('/trackuser/' + username);
    };
  }
]);