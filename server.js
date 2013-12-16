// Module dependencies.
var http = require('http');
var app = require('./server/config/app')(__dirname);

// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Reddit Insight listening on port ' + app.get('port') + ' as ' + app.get('env'));
});
