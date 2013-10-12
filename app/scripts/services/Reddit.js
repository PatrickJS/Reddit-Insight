'use strict';

angular.module('services')
  .factory('Reddit', function() {
    var reddit = {};

    reddit.trackPost = function() {
      $http
        .jsonp('http://reddit.com/.json?jsonp=JSON_CALLBACK')
        .success()
        .error()
    }

    return reddit
  })
;
