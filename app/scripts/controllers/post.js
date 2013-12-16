;(function(app) {
'use strict';

app.controller('PostCtrl', function($scope, $location) {

  $scope.submitLink = function(url, index) {
    url = url.split('/');
    index = url.indexOf('comments');
    url = url.slice(index-1).join('/');
    $location.path('/trackpost/'+url);
  };

});



}(angular.module('controllers')));
