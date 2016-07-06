$(document).ready(function(){
    var svgObject = document.getElementById("graphic");
    alert("Hey!");
    var two = new Two().appendTo(svgObject);
    two.style = "overflow-y:auto;";
    
    function getJsonData(path){
        console.log("my path now:", path)
        $.getJSON("/dirstruct/" + path, function(data){
            two.clear()
            var x = 100;
            var y = 20;
            for(var i in data){
                var text = new Two.Text(data[i], x, y);
                y+=20;
                text.stroke = '#FF8000';
                text.id = i;
                $('body').on('click', "#"+text.id, function(){
                    console.log("click!");
                    var filename = $(this).text() 
                    path = path + filename + '/'
                    getFileInfo(path, function(data){
                        console.log("Path: ", path);
                        if(!data["message"]){
                            console.log("it's a folder")
                            getJsonData(path)
                        }
                        else{
                            console.log(data["message"])
                        }
                    });
                });
                two.add(text)
                two.height += 30;
                two.update()
                };
                
               
            })
        };
    

    getJsonData("")
    
    
    function getFileInfo(id, callback){
        $.getJSON('/dirstruct/'+id, function(json, textStatus){
            callback(json)
        });
    }


    

});
    
    




