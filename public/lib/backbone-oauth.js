(function(window) {
  "use strict";

  // Alias backbone, underscore and jQuery.
  var Backbone = window.Backbone,
      _        = window._,
      $        = window.$;

  // Parse hash helper method used for parsing location.hash.
  var parseHash = function(hash) {
    var params = {},
        queryString = hash.substring(1),
    regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  };

  //============================================================================

  // Extend Backbone with OAuth functionality.
  Backbone.OAuth || (Backbone.OAuth = {});

  // The base OAuth class.
  Backbone.OAuth = function(options) {

    // Override any default option with the options passed to the constructor.
    _.extend(this, options);

    // Make the onRedirect function publicy available.
    _.bind(this.onRedirect, this);
    window.OAuthRedirect = this.onRedirect;
  };

  // Inject methods and properties.
  _.extend(Backbone.OAuth.prototype, {

    // Default for most applications.
    access_token_name: 'access_token',

    // Configures the auth dialog url.
    setupAuthUrl: function() {
      var url = this.auth_url + '?client_id=' + this.client_id +
                '&redirect_uri=' + this.redirect_url +
                '&response_type=token';
      if (this.scope) url += '&scope=' + this.scope;
      if (this.state) url += '&state=' + this.state;
      return url;
    },

    // Open the OAuth dialog and wait for a redirect.
    auth: function() {
      if (!this.access_token_name) throw new Error('No access token name given.');
      if (!this.auth_url) throw new Error('No auth url given.');
      if (!this.redirect_url) throw new Error('No redirect url given.');

      this.dialog = window.open(this.setupAuthUrl());
    },

    // Called on redirection inside the OAuth dialog window. This indicates,
    // that the dialog auth process has finished. It has to be checked, if
    // the auth was successful or not.
    onRedirect: function(hash) {
      var params = parseHash(location.hash);
      if (this.authSuccess(params)) {
        this.onSuccess(params);
      } else {
        this.onError(params);
      }
    },

    // Detect if we have a successful auth.
    authSuccess: function(params) {
      return params[this.access_token_name];
    },

    // These following methods have to be implemented by the OAuth application.
    onError: function() {},
    onSuccess: function() {}

  });

  //============================================================================

  Backbone.OAuth.configs = {
    Facebook: {
      auth_url: 'https://www.facebook.com/dialog/oauth'
    },
    Google: {
      auth_url: 'https://accounts.google.com/o/oauth2/auth',
      scope: 'https://www.googleapis.com/auth/userinfo.profile'
    },
    Reddit:{
      auth_url: 'https://ssl.reddit.com/api/v1/authorize'
    }
  };

  //============================================================================

})(this);
