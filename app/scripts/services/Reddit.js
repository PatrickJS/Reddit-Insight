;(function(app) {
'use strict';

app.factory('Reddit', function($http, Tracking) {

  var reddit = {
    limit: 100,
    trackPost: function(postUrl) {
      var fullUrl;
      postUrl
        .replace('www.', 'pay.')
        .replace('http://', 'https://');

      fullUrl = postUrl + '.json?jsonp=JSON_CALLBACK&limit=' + this.limit;

      return $http.jsonp(fullUrl)
        .success(Tracking.success('trackpost', fullUrl))
        .error(Tracking.error('trackpost', fullUrl))
    },
    trackUser: function(username) {
      var fullUrl = 'https://pay.reddit.com/user/'+ username +'/about.json?jsonp=JSON_CALLBACK';

      return $http.jsonp(fullUrl)
        .success(Tracking.success('trackuser', fullUrl))
        .error(Tracking.error('trackuser', fullUrl))
    },
    userOverview: function(username) {
      var fullUrl = 'https://pay.reddit.com/user/' + username + '/overview.json?jsonp=JSON_CALLBACK&limit=' + this.limit;

      return $http.jsonp(fullUrl)
        .success(Tracking.success('trackpost', fullUrl))
        .error(Tracking.error('trackpost', fullUrl))
    }


  };

  return reddit
});


}(angular.module('services')));
