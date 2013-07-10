var express = require('express');
var path = require('path');
var ejs = require('ejs');

module.exports = function() {
  var app = express();
  var publicDir = path.join(__dirname, '../public');

  // Store all environment variables
  app.set('port', process.env.PORT || 3000);

  // Basic configuration
  app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(publicDir));
  });

  // Environment specific configuration
  require('./environments')(app);

  // Database configuration
  require('./database')(app);

  // Routes
  require('./routes')(app);

  return app;
};
