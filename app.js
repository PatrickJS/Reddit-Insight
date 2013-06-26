
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , _ = require('underscore')
  , handlebars = require('handlebars')
  , lib = require('./myLibrary')
  , mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
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

//mongoose
mongoose.connect("mongodb://localhost/RedditInsight");

//schema
var 

//pulling data
app.throttledPullData = _.throttle(lib.getJSON, 2000);

var options = {
    host: 'www.reddit.com',
    path: '/r/all/top.json?t=all&limit=100',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

//start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  setInterval( function(){
    app.throttledPullData(options, function(statusCode, result){
      console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    })
  }, 10000);
});
