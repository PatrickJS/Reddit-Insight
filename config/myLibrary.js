var http = require('http');
var https = require('https');
/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult, self) {
    // console.log("rest::getJSON", JSON.stringify(options), onResult);

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res) {
        // console.log('response received:' + res);
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            // console.log('chunk: ', chunk);
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj, self);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};
