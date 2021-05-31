
document.getElementById("demo").style.color = "Black"
document.getElementById("man").onclick = function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById("demo").innerHTML = "The color is #" +randomColor


}