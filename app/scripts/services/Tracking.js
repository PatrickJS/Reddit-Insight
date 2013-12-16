;(function(app) {
'use strict';

app.factory('Tracking', function($rootScope, $log) {
  var _tracking = {};

  _tracking.success = function(event, args) {
    args = getArgs(arguments);
    return function() {
      $log.info(event+':success', args);
      $rootScope.$broadcast(event+':success', args)
    };
  };

  _tracking.error = function(event, args) {
    args = getArgs(arguments);
    return function() {
      $log.info(event+':error', args);
      $rootScope.$broadcast(event+':error', args)
    };
  }


  return _tracking
});

function getArgs(args) {
  return Array.prototype.slice.call(args, 1);
}

}(angular.module('services')));
