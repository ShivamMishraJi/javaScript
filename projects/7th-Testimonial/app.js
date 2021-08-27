const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const imgTest = document.getElementById("imgTest");
const clientName = document.getElementById("clientName");
const quote = document.getElementById("quote");

// Create an array with all 3 changing values
// change its index
let index = 0;
const imgSrc = [
  "assets/caique-silva-KJE--xk4AWE-unsplash.jpg",
  "assets/jim-flores-dE6c9RZoyL8-unsplash.jpg",
  "assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
  "assets/lau-keith-dcZsxUAAJXs-unsplash.jpg",
];
const nameText = [
    "Shivam","Nikhil","Maroti","OpBoy"
];

const quoteText = ["1- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis dicta et voluptas commodi nobis.",
"2-sit amet, consectetur adipisicing elit. Illo reiciendis dicta et voluptas commodi nobis. ",
"3-adipisicing elit. Illo reiciendis dicta et voluptas commodi nobisLorem ipsum dolor sit amet, consectetur adipisicing elit. .",
"4-Illo reiciendis dicta et voluptas commodi nobis."
];

leftBtn.addEventListener("click", changeReviewer);
rightBtn.addEventListener("click", changeReviewer);

function changeReviewer() {
    // console.log("inside changeReviewer");
    if(index==4){
        index=0;
    }
    console.log(index);
    imgTest.src = imgSrc[index];
    clientName.innerText = nameText[index];
    quote.innerText = quoteText[index];
    index++;
}
