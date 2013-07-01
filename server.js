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
    allPostsCollection = require('./dbLibrary.js'),
    mongoose = require('mongoose'),
    ejs = require('ejs');

var promises = {};
var app = express();

require('./config/db')(app);


mongoose.connect("mongodb://localhost/WordClouds");
promises.dataBase = mongoose.connection;
promises.dataBase.on('err', console.error.bind(console,'Could not connect to database: "'+promises.dataBase.db.databaseName+'".'));  
promises.dataBase.once('open', function(){
  console.log('Connected to database: "'+promises.dataBase.db.databaseName+'"');


  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('html', ejs.renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '/public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  //routes
  app.get('/', routes.index);

  var wordCloudsSchema = new mongoose.Schema({
    nouns: String,
    frequency: Number
  });


  app.get('/api/wordClouds/:collectionName', function(req, res, next) {
    var model = mongoose.model(req.params.collectionName);
    console.log(req.query.limit);
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









