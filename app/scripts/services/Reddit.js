;(function(app) {
'use strict';

app.factory('Reddit', function($http, Tracking) {
  var reddit = {};

  reddit.limit = 100

  reddit.trackPost = function(postUrl) {
    var fullUrl;
    postUrl
      .replace('www.', 'pay.')
      .replace('http://', 'https://');

    fullUrl = postUrl + '.json?jsonp=JSON_CALLBACK&limit=' + this.limit;

    return $http.jsonp(fullUrl)
      .success(Tracking.success('trackpost', fullUrl))
      .error(Tracking.error('trackpost', fullUrl))
  }

  return reddit
});


}(angular.module('services')));
