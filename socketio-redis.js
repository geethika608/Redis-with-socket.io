var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var redis = require('socket.io-redis');
//install redis and when run it,It runs on a default port 6379
io.adapter(redis({host: 'localhost', port: 6379}));

http.listen(3000, 'Your Ip Address Goes Here', function () {
    console.log('listening on *:3000');
});
