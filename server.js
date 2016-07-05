var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();
var root = __dirname
var server = app.listen(8000, function(){
    console.log("listening on port 8000\nPress Ctrl-C to stop.");
});
var io = require('socket.io').listen(server);
// app.use(express.static(root));
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000}, resave: true, saveUninitialized: true}));


app.get('/', function(req, res){
    var mydir = fs.readdirSync(getUserHome());
    console.log(mydir);
    res.json(mydir);
});

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}



