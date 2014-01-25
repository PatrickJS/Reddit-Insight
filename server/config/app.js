var express = require('express');
var fs = require('fs');
var path = require('path');
var cors = require('cors');
require('longjohn');

module.exports = function(SERVER_ROOT) {
  var app = express();
  app.rootPath = SERVER_ROOT;
  var config = require(app.rootPath+'/config/config.json');

  // Store all environment variables
  app.set('port', process.env.PORT || 3000);
  app.set('env', process.env.NODE_ENV || 'production');

  var serverLogPath = path.join(app.rootPath, 'log', config.serverLog);
  console.log(serverLogPath);
  var logfile = fs.createWriteStream(path.join(app.rootPath, 'log', config.serverLog), {flags: 'a'});
  // Basic configuration
  app.configure(function() {
    // App middleware
    app.use(express.logger({stream: logfile}));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(cors());
    // app.use(express.session());
    app.use(function(req, res, next){
      // Give Views/Layouts direct access to session data.
      // res.locals.session = req.session;
      res.locals.title = '';
      next();
    });
    app.use('/bower_components', express.static(path.join(app.rootPath, config.bowerPath)));
    app.use(express.static(path.join(app.rootPath, config.staticPath)));
    app.use(app.router);
  });

  // Environment specific configuration
  require('./environments')(app, config);

  // Database configuration
  require('./database')(app, config);

  // Routes
  require('./routes')(app, config);

  return app;
};
