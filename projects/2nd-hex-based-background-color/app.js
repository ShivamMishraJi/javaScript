var buttonClick = document.getElementById("clickMeButton");
buttonClick.addEventListener('click',changeBgColor);

function changeBgColor(){
    var color = getColor();
    document.body.style.background = color;
    document.getElementById('hexValue').innerText = color;
}
function getColor(){
    var color = "#";//#7645CD
    var letters = "0123456789ABCDEF";
    for(var i=0; i<6; i++){
        color += letters[Math.floor((Math.random()*16))];//letters[i]
        console.log("color value inside for loop is: "+color);
    }
    console.log("color value is: "+color);
    return color;
}