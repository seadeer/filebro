$(document).ready(function(){
    var path = "";
    var svgObject = document.getElementById("graphic");
    var two = new Two().appendTo(svgObject);
    two.style = "overflow-y:auto;";
    
    var socket = io.connect('localhost:8000');
    socket.on("send_file_tree", function(data){
        console.log("read file tree", data.filetree)
        $('#container').off('click')
        two.clear()
        var x = 100;
        var y = 20;
        for(var i in data.filetree){
            var text = new Two.Text(data.filetree[i], x, y);
            y+=20;
            text.stroke = '#FF8000';
            text.id = i;
//Add event listener to each element
            $('#container').on('click', "#"+text.id, function(){
                    console.log("click!", $(this).text());
                    ReadFileInfo($(this).text())
                });
//Add the element to the SVG canvas, resize and redraw canvas
            two.add(text);
            two.height += 30;
            two.update();
        }
    });

    socket.on("send_message", function(data){
        console.log(data.message)
    })

    function ReadFileInfo(filename){
        path = path + '/' + filename
        console.log(path)
        socket.emit("request_file_tree", {path:path})
    }

});


    
    




