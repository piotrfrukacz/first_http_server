var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {

    if (req.method === 'GET' && req.url === '/') {
        fs.readFile("index.html", function (error, data) {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
            resp.end();
        });
    } else {
        fs.readFile("404.jpg", function (error, data) {
            resp.writeHead(200, { 'Content-Type': 'image/jpg' });
            resp.write(data);
            resp.end();
        });
    }
});

server.listen(5050);

console.log('Server Started listening on 5050');