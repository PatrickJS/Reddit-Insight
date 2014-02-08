// Module dependencies.
var server = require('./server/config/app')(__dirname);

// Start server
server.listen(server.get('port'), function(){
  console.log('Reddit Insight listening on port ' + server.get('port') + ' as ' + server.get('env'));
});
