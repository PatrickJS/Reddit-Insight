;(function(app) {
'use strict';

/* Config */
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/trackpost', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl as post'
    })
    .when('/trackpost/:post', {
      templateUrl: 'views/trackpost.html',
      controller: 'TrackPostCtrl as post'
    })
    .when('/trackuser', {
      templateUrl: 'views/user.html',
      controller: 'UserCtrl as user'
    })
    .when('/trackuser/:username', {
      templateUrl: 'views/trackuser.html',
      controller: 'TrackUserCtrl as user'
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
.config(function($locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');;
})
.run(function($rootScope, $routeParams, $log) {
  $rootScope.$routeParams = $routeParams;
  $rootScope.$log = $log;
})

}(angular.module('RedditInsightApp')));
