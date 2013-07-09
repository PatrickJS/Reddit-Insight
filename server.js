require('nodetime').profile({ // Nodetime Performance Analytics
    accountKey: '3f592a5426efc7091fbef5140cf050952e47c5db',
    appName: 'RedditInsight' // Email me for access @gdi2290
  });
// Module dependencies.
var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/index'),
    http = require('http'),
    path = require('path'),
    _ = require('underscore'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    sass = require('node-sass'),
    hbsPrecompiler = require('handlebars-precompiler'),
    allPostsCollection = require('./dbLibrary.js');

var promises = {};
var app = express();

require('./config/db')(app);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/WordClouds');
promises.dataBase = mongoose.connection;
promises.dataBase.on('err', console.error.bind(console,'Could not connect to database: "'+promises.dataBase.db.databaseName+'".'));
promises.dataBase.once('open', function(){
  console.log('Connected to database: "'+promises.dataBase.db.databaseName+'"');

  // all environments
  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.engine('html', ejs.renderFile);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '/public')));
  });

  // development compile Handlebars and show errors
  app.configure('development', function(){
    hbsPrecompiler.watchDir(
      __dirname + "/public/templates",
      __dirname + "/public/templates/compiled/templates.js",
      ['handlebars', 'hbs']
    );
    app.use(express.errorHandler());
  });

  //routes
  app.get('/', routes.index);

  app.get('/api/wordClouds/:collectionName', function(req, res, next) {
    console.log(req.params.collectionName);
    var model = mongoose.model(req.params.collectionName);
    console.log('requested limit:', req.query.limit);
    model.find({}, 'noun frequency', {lean: true, limit: req.query.limit }, function (err, docs) {
      if(err){
        console.log('from find error: ', JSON.stringify(err));
        throw err;
      }
      res.send(docs);
    });
  });

    //start server
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    if ('reddit' == app.get('env')) {
      allPostsCollection.start(5000, '/subreddits/popular.json?limit=100', 'subs');
    }
  });
});









