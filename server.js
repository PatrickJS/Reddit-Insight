// Nodetime Performance Analytics
if(process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: 'Reddit Insight'
  });
}
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
