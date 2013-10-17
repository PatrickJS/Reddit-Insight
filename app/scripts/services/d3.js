;(function(app) {
'use strict';

app.factory('D3',function($q, $timeout, $window) {

  if ($window.d3) {
    var _d3 = $window.d3;
  } else {
    var deferred = $q.defer()
    var $document = $window.document;
    init();
  }

  function init() {
    function onScriptLoad() {
      // Load client in the browser
      $timeout(function() {
        _d3 = $window.d3;
        deferred.resolve($window.d3);
      });
    }
    // Create a script tag with d3 as the source
    // and call our onScriptLoad callback when it
    // has been loaded
    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = 'http://d3js.org/d3.v3.min.js';
    scriptTag.onreadystatechange = function() {
      if (this.readyState == 'complete') {
        onScriptLoad();
      }
    }
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return deferred.promise;
  }
  _d3.load = function() {
    return $window.d3 || init();
  };

  return _d3;
});

}(angular.module('services')));
