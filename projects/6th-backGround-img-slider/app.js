const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const imgSlider = document.getElementById("imgSlider");

const imgSrc = [
  "https://source.unsplash.com/1600x900/?nature,technology",
  "https://source.unsplash.com/1600x900/?nature,apple",
  "https://source.unsplash.com/1600x900/?nature,google",
  "https://source.unsplash.com/1600x900/?nature,stevejobs",
];

let i = 0;

leftBtn.addEventListener("click", changeImg);
rightBtn.addEventListener("click", changeImg);

function changeImg() {
    if(i==4){
        i=0;
    }
    console.log(i);
  imgSlider.src = imgSrc[i];
  i++;
}
