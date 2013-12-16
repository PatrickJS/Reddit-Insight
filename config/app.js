var express = require('express');
var path = require('path');
var sass = require('node-sass');

module.exports = function() {
  var app = express();
  var publicDir = path.join(__dirname, '../app');

  // Store all environment variables
  app.set('port', process.env.PORT || 3000);

  // Basic configuration
  app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(publicDir));
    app.use(sass.middleware({
      src:  __dirname + '/app/styles',
      dest: __dirname + '/app/styles',
      debug: true
    }));
  });
  // Environment specific configuration
  require('./environments')(app);

  // Database configuration
  require('./database')(app);

  // Routes
  require('./routes')(app);

  return app;
};
