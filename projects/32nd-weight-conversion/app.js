const form = document.querySelector('form');
const displayResult = document.getElementById('result');
const userInput = document.getElementById('userInput');

let result = 0;
form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the form's default submission action
    console.log("inside poundsToKGConverter");
    result = (userInput.value)/2.2;
    displayResult.innerHTML = result;

    setTimeout(function(){
        displayResult.innerHTML = '';
        userInput.value = '';
    }, 10000)

});
