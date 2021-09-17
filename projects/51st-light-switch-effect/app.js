const imgchange = document.getElementById("switch");
const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");

function changeImg(btnClick) {
  if (btnClick == "on") {
    imgchange.src = "light_on.png";
  } else {
    imgchange.src = "light_off.png";
  }
}
