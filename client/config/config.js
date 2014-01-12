'use strict';

/* Config */
angular.module('RedditInsightApp')
.run(function($rootScope, $route, $routeParams, $log) {
  $rootScope.$routeParams = $routeParams;
  $rootScope.$log = $log;
  $rootScope.$route = $route;
});
