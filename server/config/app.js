var express = require('express');
var path = require('path');

module.exports = function(SERVER_ROOT) {
  var app = express();
  app.SERVER_ROOT = SERVER_ROOT;

  // Store all environment variables
  app.set('port', process.env.PORT || 3000);
  app.set('env', process.env.NODE_ENV || 'production');


  // Basic configuration
  app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(app.SERVER_ROOT, 'public')));
  });

  // Environment specific configuration
  require('./environments')(app);

  // Database configuration
  // require('./database')(app);

  // Routes
  require('./routes')(app);

  return app;
};