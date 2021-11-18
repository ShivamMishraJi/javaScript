const div =  document.querySelectorAll("div");
// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");
// const div3 = document.getElementById("div3");

div.forEach((divElm) => {
  divElm.addEventListener("click",(e) => {
    e.target.nextElementSibling.style.backgroundColor = "yellow";
//     e.target.nextElementSibling.innerText = "yellow";
//     e.target.style.backgroundColor = "yellow";
    
//  console.log(e.target.innerText+" div is clicked");

  });
});

