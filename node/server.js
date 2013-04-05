var ??? = /* Missing require statment */,
    ??? = /* Missing require statment */,
    ??? = /* Missing require statment */;

http.createServer(function (request, response) {
  var path = url.parse(request.url, true).pathname;
  switch(request.method) {
    case 'POST':
      /*========YOUR CODE HERE=========*/
      break;
    case 'GET':
      if(path === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
