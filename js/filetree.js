$(document).ready(function(){
    var svgObject = document.getElementById("graphic");
    alert("Hey!");
    var two = new Two().appendTo(svgObject);

    $.getJSON("/dirstruct", function(data){
        console.log(data);
        var x = 20
        var y = 20
        for(i in data){
            var text = new Two.Text(data[i], x, y)
            y+=20
            text.stroke = '#FF8000'
            two.add(text)
            two.update()
        }
    });

});


