// Module dependencies.
var http = require('http');
var allPostsCollection = require('./db/pullReddit');

var app = require('./config/app')();

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + ' as ' + process.env.NODE_ENV);
  if (app.get('env') === 'reddit') {
    allPostsCollection.start(5000, '/subreddits/popular.json?limit=100', 'subs');
  }
});
