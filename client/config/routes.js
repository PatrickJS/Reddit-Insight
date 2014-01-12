'use strict';

/* Config */
angular.module('RedditInsightApp')
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      wide: true
    })
    .when('/trackpost', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl as post',
      activeTab: 'trackpost',
      wide: false
    })
    .when('/trackpost/:subreddit/comments/:post/:title', {
      templateUrl: 'views/trackpost.html',
      controller: 'TrackPostCtrl as post',
      activeTab: 'trackpost',
      wide: false
    })
    .when('/trackpost/:subreddit/:post', {
      templateUrl: 'views/trackpost.html',
      controller: 'TrackPostCtrl as post',
      activeTab: 'trackpost',
      wide: false
    })
    .when('/trackuser', {
      templateUrl: 'views/user.html',
      controller: 'UserCtrl as user',
      activeTab: 'trackuser',
      wide: false
    })
    .when('/trackuser/:username', {
      templateUrl: 'views/trackuser.html',
      controller: 'TrackUserCtrl as user',
      activeTab: 'trackuser',
      wide: false
    })
    .when('/wordcloud', {
      templateUrl: 'views/visualizations/wordcloud.html',
      wide: true
    })
    .when('/topiccluster', {
      templateUrl: 'views/visualizations/topiccluster.html',
      wide: true
    })
    .when('/circlecluster', {
      templateUrl: 'views/visualizations/circlecluster.html',
      wide: false
    })
    .when('/interaction', {
      templateUrl: 'views/visualizations/interaction.html',
      wide: false
    })
    .when('/frequency', {
      templateUrl: 'views/visualizations/frequency.html',
      wide: false
    })
    .when('/graphs', {
      templateUrl: 'views/visualizations/graphs.html',
      wide: true
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      activeTab: 'about',
      wide: false
    })
    .otherwise({
      redirectTo: '/'
    });
})
.config(function($locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');;
});
