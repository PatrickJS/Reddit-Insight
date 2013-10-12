'use strict';

/* Config */
angular.module('RedditInsightApp')
  .config( function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/trackpost', {
        templateUrl: 'views/trackpost.html',
        controller: 'TrackPostCtrl as post'
      })
      .when('/trackuser', {
        templateUrl: 'views/trackuser.html'
      })

      .when('/wordcloud', {
        templateUrl: 'views/visualizations/wordcloud.html'
      })
      .when('/topiccluster', {
        templateUrl: 'views/visualizations/topiccluster.html'
      })
      .when('/circlecluster', {
        templateUrl: 'views/visualizations/circlecluster.html'
      })
      .when('/interaction', {
        templateUrl: 'views/visualizations/interaction.html'
      })
      .when('/frequency', {
        templateUrl: 'views/visualizations/frequency.html'
      })
      .when('/graphs', {
        templateUrl: 'views/visualizations/graphs.html'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config( function($locationProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('!');;
  })
;
