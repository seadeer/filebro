var svgObject = document.getElementById("graphic")
alert("Hey!")
var fs = require('fs')
var two = new Two().appendTo(svgObject)

function getDirContent(){
    console.log("In here");
    var dircontent = fs.readdirSync('/')
    console.log(dircontent)
}
