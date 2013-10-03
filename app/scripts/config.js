'use strict';

/* Config */
angular.module('RedditInsightApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })      .when('/trackpost', {
        templateUrl: 'views/trackpost.html',
        controller: 'MainCtrl'
      })
      .when('/trackuser', {
        templateUrl: 'views/trackuser.html',
        controller: 'MainCtrl'
      })
      .when('/wordcloud', {
        templateUrl: 'views/visualizations/wordcloud.html',
        controller: 'MainCtrl'
      })
      .when('/topiccluster', {
        templateUrl: 'views/visualizations/topiccluster.html',
        controller: 'MainCtrl'
      })
      .when('/circlecluster', {
        templateUrl: 'views/visualizations/circlecluster.html',
        controller: 'MainCtrl'
      })
      .when('/interaction', {
        templateUrl: 'views/visualizations/interaction.html',
        controller: 'MainCtrl'
      })
      .when('/frequency', {
        templateUrl: 'views/visualizations/frequency.html',
        controller: 'MainCtrl'
      })
      .when('/graphs', {
        templateUrl: 'views/visualizations/graphs.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($locationProvider) {
    // $locationProvider.html5Mode(true);
  })
;
