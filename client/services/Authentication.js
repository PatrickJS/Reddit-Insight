'use strict';

angular.module('services')
  .factory('AuthenticationService', function() {
    var current_user;

    return {
      signIn: function() {
        // check password on server, get user data, unique token, etc.
      },
      signOut: function() {
        // clear current_user data, unset logged in status, etc.
      },
      isSignedIn: function() {
        // logic to check if current user has signed in
      },
      currentUser: function() {
        // return the current_user object, or handle if the user is not signed in
      }
    };
  })
;
