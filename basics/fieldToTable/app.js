const button = document.getElementById("btn");
const inputField = document.getElementById("inputField");
const table = document.getElementById("table");
const tBody = document.getElementById("tBody");

let i = 0; 

button.addEventListener("click", () => {
  let newRow = tBody.insertRow(i);
  let cell0 = newRow.insertCell(0);
  let cell1 = newRow.insertCell(1);
  
  cell0.innerHTML = i+1;
  cell1.innerHTML = inputField.value;

  i++;
  inputField.value = "";
}); 
0