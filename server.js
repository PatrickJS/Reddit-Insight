require('nodetime').profile({ // Nodetime Performance Analytics
  accountKey: '3f592a5426efc7091fbef5140cf050952e47c5db',
  appName: 'RedditInsight'
});
// Module dependencies.
var http = require('http'),
    allPostsCollection = require('./db/pullReddit'),
    app = require('./config/app')();

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port') + ' as ' + process.env.NODE_ENV);
  if (app.get('env') === 'reddit') {
    allPostsCollection.start(5000, '/subreddits/popular.json?limit=100', 'subs');
  }
});
