var svgObject = document.getElementById("graphic")
var fs = require('fs')
svgObject.onload = function(){
    var mySvg = svgObject.contentDocument.getElementsByTagName('svg')[0]
    var two = new Two().appendTo(mySvg)
    
}
