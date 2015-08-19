var storage = [];
// var querystring = require('querystring');
var url = require('url');

var requestHandler = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);
  var parsedURL = url.parse(request.url);

  var statusCode = 200;

  console.log("Request handler loaded...");

  app.post('/saved', function(req, res) {
    console.log(req);
    if (req) {
      console.log("req:", req);
      var obj = req.body; // get from post body.
      
      console.log(obj);

      storage.push(obj);
      res.status(200);
      res.send('OK');
    }else{
      res.sendStatus(400);
    }
  });
}

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.requestHandler = requestHandler;