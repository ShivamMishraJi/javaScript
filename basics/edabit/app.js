//Remove duplicates from array/////////////////////////////////////////
// function removeDups(arr) {
    //1st using map()
    // const newArr = [];
	// arr.map((elm)=>{
	// 	if(!newArr.includes(elm)){
	// 		 newArr.push(elm);
	// 	}
	// });
    // return newArr;

    //2nd using spread and set and splice()
    // const newArr = new Set(arr);
    // return newArr;

    //3rd using filter and indexOf()
    // return arr.filter((a,b)=>arr.indexOf(a) === b);
    // arr.filter((a,b)=>{
        // console.log("a: "+arr.indexOf(a));
        // console.log("b: "+b);
        // console.log(arr.indexOf(a) === b)
    // });


// }

// const newArr = removeDups([1,2,3,4,5,1,3]);
// const newArr = removeDups(["apple","banana",'mango',"apple"]);
// console.log(newArr);

/////////////////////////////////////////////////////////////////////
// function whichIsLarger(f, g) {
// 	const val1 = f();
// 	const val2 = g();

//     return val1>val2 ? "f":
//     val1==val2?"neither":
//     "g";
// }


// console.log(whichIsLarger(() => 5, () => 10));
// // ➞ "g"

// console.log(whichIsLarger(() => 25,  () => 25));
// // ➞ "neither"

// console.log(whichIsLarger(() => 505050, () => 5050));
// // ➞ "f"
////////////////////////////////////////////////////////////////////
// function shiftToLeft(x, y) {
// 	console.log(x*Math.pow(2,y));
// }
// shiftToLeft(5, 2) 
// //➞ 20

// shiftToLeft(10, 3)
// // ➞ 80

// shiftToLeft(-32, 2) 
// //➞ -128

// shiftToLeft(-6, 5) 
// //➞ -192

// shiftToLeft(12, 4) 
// //➞ 192

// shiftToLeft(46, 6) 
// //➞ 2944
//////////////////////////////////////////////////////////////////






