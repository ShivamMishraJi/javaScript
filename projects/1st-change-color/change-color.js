let buttonClick = document.getElementById("clickMeButton");
buttonClick.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  let color = getRandomColor();
  document.body.style.background = color;
  // buttonClick.style.background = color;
}

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// Math.floor() - Round a number downward to its nearest integer:
function getRandomColor() {
//   console.log("inside changeBodyColor method");
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
