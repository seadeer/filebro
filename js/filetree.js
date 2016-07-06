$(document).ready(function(){
    var svgObject = document.getElementById("graphic");
    alert("Hey!");
    var two = new Two().appendTo(svgObject);
    two.style = "overflow-y:auto;"
    
    function getJsonData(){
        $.getJSON("/dirstruct", function(data){
            console.log(data);
            var x = 100
            var y = 20
            for(i in data){
                var text = new Two.Text(data[i], x, y)
                y+=20
                text.stroke = '#FF8000'
                text.id = data[i]
                two.add(text)
                two.height += 30;
                two.update()
            }
        });
    }

    getJsonData()

    

});
    
    




