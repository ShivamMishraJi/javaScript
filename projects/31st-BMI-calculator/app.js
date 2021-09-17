const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //toFixed() Convert a number into a string, rounding the number to keep only two decimals:
    
    //display the results
    if(parseInt(bmi)<=18.6){
        results.innerHTML = bmi+' - Under Weight';
    }else if(24.9 <= parseInt(bmi)<=18.6 ){
        results.innerHTML = bmi+' - Normal Weight';
    }else{
        results.innerHTML = bmi+' - Over Weight';
    }
    // results.innerHTML = bmi;
    }
    
    
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN