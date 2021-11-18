const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
 

// https://stackoverflow.com/questions/42964102/syntax-for-an-async-arrow-function

//getRequest using fetch
getBtn.addEventListener("click",async () => {
    const postData = await getRequest("https://jsonplaceholder.typicode.com/posts");
    console.log(postData);
});

getBtn.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        console.log("Enter key pressed on btn");
    }
});

// function getRequest(url){
//     return fetch(url).then((response)=>{
//         return response.json();
//         // console.log(response.json());
//     });
// }
/////////////////////////////////////////////
//postRequest using fetch
const data = {
    userId: 101,
    id: 101,
    title: "New Post",
    body: "New Post by Shivam"
};

postBtn.addEventListener("click",async ()=>{
    await postRequest("https://jsonplaceholder.typicode.com/posts","POST",data)
});


function postRequest(url,method,data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data)
    }).then(
        response => {
            return response.json();
        });
    }

/////////////////////////////////////////////////////////////////
//getPost using axios

function getRequest(url){
    return axios.get(url);
    // return fetch(url).then((response)=>{
    //     return response.json();
    //     // console.log(response.json());
    // });
}
const num = "5";
// null - object
// undefined - undefined
// NaN - number
// function - object
// array - object
// object - object 
// console.log(typeof NaN);
// console.dir(typeof NaN);
// console.dir(NaN);

//var vs let & const  --> 2 imp things --> 
// 1) var is global & function scoped while let&const are block scoped
// 2) var is hoisted to the top and defined and initialized with a value of undefined
// let & const are also hoisted to the top and defined but NOT initialized with any value
// therefor we get an error of uninitialized

// var know global scope and function scope ..but we can use var defined inside if statement, outside of if..
// coz if is not a function, its a statement

// but for let& const are block scoped or {} curly braces scoped

//hoisting in var
// console.log(naming);  //undefined
// var naming = "Shivam";

//hoisting in var
console.log(naming);  //app.js:86 Uncaught ReferenceError: Cannot access 'naming' before initialization
let naming = "Shivam";

//stack is a short lived memory and only temp data is stored there and no need of memory management 
// but HEAP is a long lived memory there need memory management and Garbage collection

//Garbage collection is provide by the v8 engine on which JS runs