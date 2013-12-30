'use strict';

angular.module('services')
.factory('Reddit', function($http, Tracking) {

  var reddit = {
    limit: 100,
    trackPost: function(postUrl) {
      var fullUrl;
      postUrl
        .replace('www.', 'pay.')
        .replace('http://', 'https://');

      fullUrl = postUrl + '.json?jsonp=JSON_CALLBACK&limit=' + this.limit;

      var httpRequest = $http.jsonp(fullUrl);

      httpRequest
        .success(Tracking.success('trackpost', postUrl, fullUrl, this.limit))
        .error(Tracking.error('trackpost', postUrl, fullUrl, this.limit))

      return httpRequest;
    },
    trackUser: function(username) {
      var fullUrl = 'https://pay.reddit.com/user/'+ username +'/about.json?jsonp=JSON_CALLBACK';

      var httpRequest = $http.jsonp(fullUrl);

      httpRequest
        .success(Tracking.success('trackuser', fullUrl, username))
        .error(Tracking.error('trackuser', fullUrl, username))
      ;

      return httpRequest;
    },
    userOverview: function(username) {

      var fullUrl = 'https://pay.reddit.com/user/' + username + '/overview.json?jsonp=JSON_CALLBACK&limit=' + this.limit;

      var httpRequest = $http.jsonp(fullUrl)

      httpRequest
        .success(Tracking.success('overview', fullUrl, username))
        .error(Tracking.error('overview', fullUrl, username))
      ;

      return httpRequest;
    }


  };

  return reddit
});


