
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/index')
  , http = require('http')
  , path = require('path')
  , _ = require('underscore')
  , allPostsCollection = require('./dbLibrary.js').allPostsCollection  // why do I have to tdo this!?
  , mongoose = require('mongoose')
  , ejs = require('ejs');

var app = express();

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

//start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  // allPostsCollection.start(5000, '/subreddits/popular.json?limit=100', 'subs');

});









