const buttons = document.querySelectorAll("button");
//It’s important to note that document.querySelectorAll() does not return an array, but a NodeList object.
// You can iterate it with forEach or for..of,
// or you can transform it to an array with Array.from() if you want.
let btnValue = "";
let result;
for (const btn of buttons) {
  btn.addEventListener("click", function (event) {
    //to 
    if (btn.innerText != "=") {
      if (btn.innerText == "c") {
        btnValue = "";
        document.getElementById("screen").value = "";
      } else {
        btnValue += btn.innerText;
        document.getElementById("screen").value = btnValue;
      }
    } else {
      try {
        result = eval(btnValue);
      } catch (err) {
        // console.log("inside catch: " + result);
        btnValue = "";
        document.getElementById("screen").value = "";
        alert("invalid input");
      }
      if (result != undefined) {
        btnValue = "";
        document.getElementById("screen").value = result;
     
      }
    }
  });
}
