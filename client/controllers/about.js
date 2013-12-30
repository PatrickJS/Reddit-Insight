'use strict';

angular.module('controllers')
.controller('AboutCtrl', function($scope, AboutPageService) {
  $scope.aboutInfo = AboutPageService;
});
