let screen = document.getElementById('screen');
let Buttons = document.querySelectorAll("button");
// let Buttons = document.getElementsByTagName("button");

let screenvalue ='';  

// console.log("Buttons.length is: "+allButton.length);
function displayConsole(id){
    // console.log("Shivam: "+document.getElementById(`${id}`).innerText);
    const innerValue = document.getElementById(`${id}`).innerText;
    document.getElementById("screen").value=innerValue;
}




for (item of Buttons){
    console.log("button is clicked");
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='*'){
            buttonText ='*';
            screenvalue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='c'){
            screenvalue ="=";
            screen.value = screenvalue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        
    })
}