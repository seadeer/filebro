var express = require('express');
// var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();
var root = __dirname
var server = app.listen(8000, function(){
    console.log("listening on port 8000\nPress Ctrl-C to stop.");
});
var io = require('socket.io').listen(server);
app.use(express.static(root));
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000}, resave: true, saveUninitialized: true}));
// app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');





