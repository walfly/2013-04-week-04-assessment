var http = require('http'),
    url = require('url'),
    fs = require('fs');
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
defaultCorsHeaders['Content-Type'] = "plain/tex";

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'OPTIONS':
        response.writeHead(200, defaultCorsHeaders);
        response.end();
        break;
    case 'POST':
      response.writeHead(201, defaultCorsHeaders);
      if (path === '/hifive'){
        response.end(fs.readFileSync(__dirname + '/assets/hifive.jpg'));
      } else if (path === '/lowfive'){
        response.end(fs.readFileSync(__dirname + '/assets/lowfive.jpg'));
      }
      break;
    case 'GET':
      if(path === '/'){
        response.writeHead(200, defaultCorsHeaders);
        /* Note: provide a proper status code (200) and content type ('text/html') in the HTTP response  */
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
