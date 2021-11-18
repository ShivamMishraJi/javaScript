// let userInput = "test@gmail.com";

// const regex = /^\S+@\S+\.\S+$/

// console.log(regex.test(userInput));

/////////////////////////////////////////////////
// let userName = "Max";

// function greetUser(){
//     let name = userName;
//     console.log("Hi "+name);
// } 
// userName = "Manuel";

// greetUser();
////////////////////localstorage and session storage/////////////////////////////
const btnContainer = document.getElementById('btnContainer');
const store = document.getElementById('store');
const retrieve = document.getElementById('retrieve');

// const user = {name:"shivam",age:26}
// const userId = 'uid123'
// btnContainer.addEventListener('click',(e) => {
//     if(e.target.id === 'store'){
        
//         console.log("stored");
//         //localStorage

//         //can be done with/without window.
//         // window.localStorage.setItem('user',user);
//         window.localStorage.setItem('uid',userId);

//         //sessionStorage
//         // window.sessionStorage.setItem

//         //cookie
//         document.cookie = `uid=${userId}`;
//         document.cookie = `user=${JSON.stringify(user)}`;
//     }
    
//     if(e.target.id === 'retrieve'){
//         console.log("retrieved");

//         //localStorage
//         // console.log(localStorage.getItem('user'));
//         console.log(localStorage.getItem('uid'));

//         //cookie
//         console.log(document.cookie.split(';'));

//     }

// });
////////////////////////array methods push,pop,unshift,shift
// const arr1 = [5,4,6,1];
// arr1.push(8);
// console.log(arr1);
// // arr1.unshift(10);
// // console.log(arr1);

// // console.log(arr1.pop());
// // console.log(arr1.shift());

// const arr2 = arr1.slice(1,30);
// // console.log(arr1.slice(1,30));
// console.log(arr2);


///////////////////////object destructuring//////
// import {user} from './user'
// console.log(user.userAge);

////////////////////////////////////////
// const arr1 = [{name:'shivam',age:26},{name:'rajan',age:27}];

// arr1.map((elm,id,arr)=>{

//     console.log(`Name is ${elm.name} age is ${elm.age}`);
// });
/////////////////////currying/////////

// const func = (x) => (y) => (z) => {
//     return x+y+z;
//     // console.log(x+y+z);


// }
// console.log(func(1)(2)(3));

// function func1 (x) {
//     return function (y){
//         // y*2
//         return function (z){
//             return x*2;
//             // return x*2+(y*2)+z;
//         }
//     }
// }
// console.log(func1(2)(5)(7));

// function closure1(x){
//     // x=5;
//     function insideClosure(y){
//         return x+y;
//     }
//     return insideClosure;
// }
// const tempResult = closure1(5);
// // console.log(tempResult);
// console.log(tempResult(6));    
/////////////////////////////////////////////
// store.addEventListener('click',()=> {add(5,4)});
// store.addEventListener('click');

// function add(a,b){
//     console.log(a+b);
// }
/////////////////call()/////////////////////////////
// const person = {
//     fullName: function(age,salary) {
//       return this.firstName + " " + this.lastName+" "+age+" "+salary;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe",
    
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe",
//   }

//   const bindEx = person.fullName.bind(person1,26,1000)
//   console.log(bindEx());
//   console.log(person.fullName.call(person2,26));
// const applyEx = person.fullName.apply(person2,[26,10000])
//   console.log(person.fullName.apply(person2,[26,10000]));
//   console.log(applyEx);
//   console.log(person.fullName.call(person2));
//   console.log(person1.fullName());

// //////////////////////////Array.filter()


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let i = 0;
// var result = numbers.filter(number => )
// //     console.log(i+": "+number%2 ? 'even' : 'odd');
// //     // i++; 
// // });
// console.log(result);

// const userName = '9123aak12ash1239';
// const newUserName = Array.from(userName);
// console.log(newUserName);
    
// const x = newUserName.filter(Number).map(Number);
// var hasNumber = /\d/;
// const regex = new RegExp('/\d/'); 
// const x = newUserName.map((num)=>{
//     if(x.match(regex)){
//         return num;
//     }
// });

// console.log(x);

// let result = 0;
// for(const i of x){
//     result +=i;
// }
// console.log(result);
//////////////////////////////
// const arr1 = [['name','rajan'],['name','shivam']];
// arr1.map((elm,id,arr1) =>
//     console.log(elm(0))
// );