const defaultQuote = document.getElementById("quotes").innerText;
const defaultAuthor = document.getElementById("author").innerText;

//2
const quote = [
  "The price of anything is the amount of life you exchange for it",
  "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
  "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
  defaultQuote,
];
const author = ["David Thoreau", "Tyne Daly", "Shivam", defaultAuthor];

let i = 0;

//1
const clickMeButton = document.getElementById("click-me");
clickMeButton.addEventListener("click", changeQuote);

function changeQuote() {
  //4
  if (i == 4) {
    i = 0;
    document.getElementById("quotes").innerText = defaultQuote;
    document.getElementById("author").innerText = defaultAuthor;
  }
  //3
  document.getElementById("quotes").innerText = quote[i];
  document.getElementById("author").innerText = author[i];

  i++;
}
