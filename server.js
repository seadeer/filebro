var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();
var root = __dirname
app.use(express.static(root));
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000}, resave: true, saveUninitialized: true}));
var server = app.listen(8000, function(){
    console.log("listening on port 8000\nPress Ctrl-C to stop.");
});
var io = require('socket.io').listen(server);


//Sockets code
io.sockets.on('connection', function(socket){
    console.log("Connected on socket ", socket.id);
    var mydir = getUserHome()
    var target = fs.readdirSync(mydir);
    socket.emit("send_file_tree", {filetree:target})

socket.on('request_file_tree', function(data){
    var filePath = getUserHome() + data.path
    if (fs.statSync(filePath).isDirectory()){
        socket.emit("send_file_tree", {filetree:fs.readdirSync(filePath)})    
        }
    else {
        socket.emit("send_message", {message:"It's a file!"})
        }
    })

socket.on('disconnect', function(){
        console.log('User disconnected')
    })
})



// //HTTP code
// app.get('/dirstruct/', function(req, res){
//     var mydir = getUserHome()
//     var target = fs.readdirSync(mydir);
//     res.json(target);
// });

// app.get('/dirstruct/:id', function(req, res){
//     var mydir = getUserHome() + '/' + req.params.id 
//     if(fs.statSync(mydir).isDirectory()){
//         console.log(req.params.id, req.body, "It's a directory")
//         res.json(fs.readdirSync(mydir));
//     }
//     else if(fs.statSync(mydir).isFile()){
//         console.log(req.params.id, req.body, "It's a file")
//         res.json({"message": "It's a file"})
//     }
//     var target = fs.readdirSync
// })

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}



