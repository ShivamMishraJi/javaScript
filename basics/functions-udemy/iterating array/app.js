let book = ["Math","Physics","Chem"];

book.forEach(myFunc);
// The forEach() method calls a function once for each element in an array, in order.
// forEach() is not executed for array elements without values.

function myFunc(ev){
  console.log("value is: "+ev);
}
