var http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'POST':
      if (path === '/hifive'){
        response.end(fs.readFileSync(__dirname + '/assets/hifive.jpg'))
      } else if (path === '/lowfive'){
        response.end(fs.readFileSync(__dirname + '/assets/lowfive.jpg'))
      }
      break;
    case 'GET':
      if(path === '/'){
        /* Note: provide a proper status code (200) and content type ('text/html') in the HTTP response  */
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
