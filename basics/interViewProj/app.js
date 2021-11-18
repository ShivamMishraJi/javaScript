// function resetTimer (){
    
// }

// function sessionTimeoutAlert(){
//     window.onclick = resetTimer();

//     setTimeout(()=>{
//         console.log("Your session is timed out");
//     },5000)
// }

// sessionTimeoutAlert();

// 25/12/1995

const date = new Date();
console.log(date.getFullYear());


// function sessionTimeoutAlert(){
//     const x=2;
//     function child(){
//         console.log(x*2);
//     }
//     return child;

//     }

//     const func = sessionTimeoutAlert();
//     console.log(func());




// const inputField = document.getElementById("inputField");
// const btn = document.getElementById("btn");

// function submitData(){
//     // for(let i=0;i<10;i++){
//     //     console.log(i);
//     // }
//     // console.log(inputField.value);
//     const data = inputField.value;
//     const x = Array.from(data).map((num,id,data)=>{
//         let counter = 1;
        
//         if(isNaN(num)){
            
//             alert("Wrong Mobile Number");
//             counter++;
//         }

//     });
//     console.log(Array.from(data));
// }


// btn.addEventListener('click',submitData);
// // btn2.addEventListener('click',submitData);
// // JSON.parse()


// Questions
// 1) what is negative Infinity
// 2) submit data from input field in page1 to page2
// 3) compare date objects
// 4) user idle - session timeout
// 5) check for mobile number - don't use regExp
// 6) JSON methods  - parse and stringify
// 7) closure
// 8) negative Infinity
// 9) undeclare and undefined
// 10) form validation