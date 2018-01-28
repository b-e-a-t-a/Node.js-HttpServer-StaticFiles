var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.setHeader("Content-Type", "charset=UTF-8");
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('./index.html', 'utf-8', function(err, data){
        response.write(data);
        response.end();
    });
  } else {
    response.statusCode = 404;
    fs.readFile('./error.png', function(err, png) {
      response.write(png);
      response.end();
    });
  }
});
server.listen(8000);


/* przykład pierwszy
var http = require('http');

//var server = http.createServer(function(request, response) {
var server = http.createServer ();
server.on('request', function (request, response) {
  response.write('<body>');
  response.write('<h1>Hello Beata!</h1>');
  response.write('</body>');
  response.write('<h2>This is awesome!</h2>');
  response.end();
});
server.listen(8000);
*/

/* przykład - inna odp w zależnosci od zapytania
var http = require('http');

var server = http.createServer ();
server.on('request', function (request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === 'GET' && request.url === '/hello') {
    response.write('<h1>Hello World!</h1>');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('<h1>404: Zła ścieżka!</h1>');
    response.end();
  }
});
server.listen(8080);
*/