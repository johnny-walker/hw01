//https://www.tutorialsteacher.com/nodejs/expressjs-web-application (webapp's step-by-step tutorial)
//https://www.tutorialspoint.com/http/http_methods.htm  (HTTP request methods)
//https://www.tutorialspoint.com/http/http_status_codes.htm (HTTP response status codes)

var express = require('express');
var app = express();


app.get('/', function (req, res) {
    console.log(res.url);
    res.sendFile( __dirname + '/' + 'index.html');
});

app.get('/*', function (req, res) {
    console.log(req.url);
    res.sendFile( __dirname + '/' + req.url);
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
