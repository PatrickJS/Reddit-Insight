'use strict';
angular.module('services').factory('AboutPageService', function () {
  return {
    teammates: [
      {
        name: 'Patrick Stapleton',
        avatar: '3d2f120',
        about: 'Responsibilities: Overall MVC architecture, Full-Stack, code refactoring, debugging suite, integrating everything.',
        website: 'gdi2290.com',
        github: 'gdi2290',
        linkedin: 'gdi2290',
        twitter: 'gdi2290'
      },
      {
        name: 'Alex Gaputin',
        avatar: '19ee9fb',
        about: 'Responsibilities: initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.',
        website: 'googamanga.tumblr.com',
        github: 'googamanga',
        linkedin: 'alexgaputin',
        twitter: 'googamanga'
      },
      {
        name: 'Elle Beal',
        avatar: '0e8ddaf',
        about: 'Responsibilities: worked primarily on the front end integrating the data into the d3.js graphs, project management, as well as styling and user testing.',
        website: 'ellebeal.com',
        github: 'ebeal',
        linkedin: 'eleanor-beal',
        twitter: 'elliebee'
      },
      {
        name: 'Kevin Smith',
        avatar: '16f16e9',
        about: 'Responsibilities: initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.',
        website: 'kevinhamiltonsmith.com',
        github: 'kevinhamiltonsmith',
        linkedin: 'kevinhsmith',
        twitter: 'kevinhsmitty'
      },
      {
        name: 'Bill Shelton',
        avatar: '32e1404',
        about: 'Responsibilities: lead data scientist, data munging, data visualization and machine learning with Python, D3 and R.',
        website: 'williamshelton.nodejitsu.com',
        github: 'sheltowt',
        linkedin: 'williamshelton',
        twitter: 'sheltowt'
      }
    ],
    specialThanks: {
      name: 'Christopher Sita',
      avatar: 'chris',
      about: 'Responsibilities: built the d3 framework for the Interaction scatter graph',
      website: 'chrissita.com',
      github: 'tooseata',
      linkedin: 'chrissita'
    },
    hackreactor: {
      link: 'http://s.gdi2290.com/Hack_Reactor',
      image: 'http://hackreactor.com/wp-content/uploads/2013/04/180px.png',
      image2: 'http://catalystsf.staging.wpengine.com/wp-content/uploads/2012/10/Logos.png',
      header: 'The CS Degree for the 21st Century.',
      about: 'Learn the skills needed to become a Software Engineer in a intensive course that runs 12 hours a day, 6 days per week, for 3 months. The course is based in JavaScript, with an emphasis on modern tools and frameworks such as Angular.js,  Backbone.js, Node.js, jQuery, Meteor, and more. We also study core computer science concepts like data structures, algorithms, and time complexities, along with other web languages like Ruby, Rails, HTML5, and CSS3.'
    }
  };
});
;'use strict';
angular.module('services').factory('AuthenticationService', function () {
  var current_user;
  return {
    signIn: function () {
    },
    signOut: function () {
    },
    isSignedIn: function () {
    },
    currentUser: function () {
    }
  };
});
;'use strict';
angular.module('services').provider('$interval', function () {
  this.$get = [
    '$rootScope',
    '$window',
    '$q',
    function ($rootScope, $window, $q) {
      var intervals = {};
      function interval(fn, delay, count, invokeApply) {
        var setInterval = $window.setInterval, clearInterval = $window.clearInterval;
        var deferred = $q.defer(), promise = deferred.promise, count = angular.isDefined(count) ? count : 0, iteration = 0, skipApply = angular.isDefined(invokeApply) && !invokeApply;
        promise.then(null, null, fn);
        promise.$$intervalId = setInterval(function tick() {
          deferred.notify(iteration++);
          if (count > 0 && iteration >= count) {
            deferred.resolve(iteration);
            clearInterval(promise.$$intervalId);
            delete intervals[promise.$$intervalId];
          }
          if (!skipApply)
            $rootScope.$apply();
        }, delay);
        intervals[promise.$$intervalId] = deferred;
        return promise;
      }
      interval.cancel = function (promise) {
        if (promise && promise.$$intervalId in intervals) {
          intervals[promise.$$intervalId].reject('canceled');
          clearInterval(promise.$$intervalId);
          delete intervals[promise.$$intervalId];
          return true;
        }
        return false;
      };
      return interval;
    }
  ];
});'use strict';
angular.module('services').factory('Reddit', [
  '$http',
  'Tracking',
  function ($http, Tracking) {
    var reddit = {
        limit: 100,
        trackPost: function (postUrl) {
          var fullUrl;
          postUrl.replace('www.', 'pay.').replace('http://', 'https://');
          fullUrl = postUrl + '.json?jsonp=JSON_CALLBACK&limit=' + this.limit;
          var httpRequest = $http.jsonp(fullUrl);
          httpRequest.success(Tracking.success('trackpost', postUrl, fullUrl, this.limit)).error(Tracking.error('trackpost', postUrl, fullUrl, this.limit));
          return httpRequest;
        },
        trackUser: function (username) {
          var fullUrl = 'https://pay.reddit.com/user/' + username + '/about.json?jsonp=JSON_CALLBACK';
          var httpRequest = $http.jsonp(fullUrl);
          httpRequest.success(Tracking.success('trackuser', fullUrl, username)).error(Tracking.error('trackuser', fullUrl, username));
          ;
          return httpRequest;
        },
        userOverview: function (username) {
          var fullUrl = 'https://pay.reddit.com/user/' + username + '/overview.json?jsonp=JSON_CALLBACK&limit=' + this.limit;
          var httpRequest = $http.jsonp(fullUrl);
          httpRequest.success(Tracking.success('overview', fullUrl, username)).error(Tracking.error('overview', fullUrl, username));
          ;
          return httpRequest;
        }
      };
    return reddit;
  }
]);'use strict';
angular.module('services').factory('Tracking', [
  '$rootScope',
  '$log',
  function ($rootScope, $log) {
    var _tracking = {};
    _tracking.success = function (event, args) {
      args = getArgs(arguments);
      return function () {
        $log.info(event + ':success', args);
        $rootScope.$broadcast(event + ':success', args);
      };
    };
    _tracking.error = function (event, args) {
      args = getArgs(arguments);
      return function () {
        $log.info(event + ':error', args);
        $rootScope.$broadcast(event + ':error', args);
      };
    };
    return _tracking;
  }
]);
function getArgs(args) {
  return Array.prototype.slice.call(args, 1);
};
(function (app) {
  'use strict';
  app.provider('D3', function () {
    var _asyncLoading = false;
    var _scriptUrl = '//cdnjs.cloudflare.com/ajax/libs/d3/3.3.3/d3.min.js';
    this.asyncLoading = function (config) {
      _asyncLoading = config || _asyncLoading;
      return this;
    };
    this.scriptUrl = function (url) {
      _scriptUrl = url || _scriptUrl;
      return this;
    };
    function createScript($document, callback) {
      var scriptTag = $document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = _scriptUrl;
      scriptTag.onreadystatechange = function () {
        if (this.readyState == 'complete') {
          callback();
        }
      };
      scriptTag.onload = callback;
      var s = $document.getElementsByTagName('body')[0];
      s.appendChild(scriptTag);
    }
    this.$get = function ($q, $rootScope, $window) {
      var deferred = $q.defer();
      var _d3 = $window.d3;
      deferred.isPromise = true;
      _d3.isPromise = false;
      if (_asyncLoading) {
        var onScriptLoad = function (callback) {
          $timeout(function () {
            deferred.resolve($window.d3);
          });
        };
        createScript($document[0], onScriptLoad);
      }
      return _asyncLoading ? deferred.promise : _d3;
    };
  });
}(angular.module('services')));