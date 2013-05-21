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
        /* Note: provide a proper status code (200) and content type ('text/html') in the HTTP response  */
        response.end(fs.readFileSync(__dirname+'/index.html'));
      }
      break;
    default:
      response.end(404);
  }
}).listen(8080, '127.0.0.1');

console.log('Listening...');
