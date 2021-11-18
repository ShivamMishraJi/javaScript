// let book = ["Math","Physics","Chem"];

// book.forEach(myFunc);
// // The forEach() method calls a function once for each element in an array, in order.
// // forEach() is not executed for array elements without values.

// function myFunc(ev){
//   console.log("value is: "+ev);
// }

const postBtn = document.getElementById("postBtn");
 

// https://stackoverflow.com/questions/42964102/syntax-for-an-async-arrow-function

//getRequest using fetch
postBtn.addEventListener("click",postRequest);
console.log(postRequest)

// function postRequest(){
//     console.log('called function');
// }
let postRequest = function postRequest(){
    console.log('called function');
}