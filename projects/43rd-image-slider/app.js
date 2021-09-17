const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const imgSlider = document.getElementById("imgSlider");

const imgSrc = [
  "assets/img-1.jpg",
  "assets/img-2.jpg",
  "assets/img-3.jpg",
  "assets/img-4.jpg",
];

let i = 0;

leftBtn.addEventListener("click", function () {
  i--;
  if (i < 0 ) {
    i = imgSrc.length -1;
  }
  console.log(i);
  imgSlider.src = imgSrc[i];
});

rightBtn.addEventListener("click", function () {
  i++;
  if (i >= imgSrc.length) {
    i = 0;
  }
  console.log(i);
  imgSlider.src = imgSrc[i];
});
