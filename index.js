//https://www.tutorialsteacher.com/nodejs/expressjs-web-application (this webapp's step-by-step tutorial)
//https://www.tutorialspoint.com/http/http_methods.htm  (HTTP request methods)
//https://www.tutorialspoint.com/http/http_status_codes.htm (HTTP response status codes)

var express = require('express');
var path = require('path');

var app = express();


app.get('/', function (req, res) {
    res.sendFile( __dirname + '/index.html');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});