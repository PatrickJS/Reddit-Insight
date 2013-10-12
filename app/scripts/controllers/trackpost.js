'use strict';

 angular.module('controllers')
   .controller('TrackPostCtrl', function(Reddit) {

    this.stats = false;

    this.redditData = {}

    this.submitLink = function(url) {
      console.log('link ', url);
      $http
      this.stats = true
    };

    this.trackingUrl = '';

    this.url = 'lol';

  });
