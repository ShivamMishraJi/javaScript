let colors = [ 'green', 'orange', 'red', 'purple', 'blue', 'yellow', 'black'];



//change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length));
    //grab the canvas
    let container = document.getElementById('container');

    container.style.background = `${colors[index]}`
})