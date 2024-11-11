var quotes = [
  {
    q: "Winter is coming.",
    a: " George R.R. Martin",
  },
  {
    q: "It is better to be hated for what you are than to be loved for what you are not.",
    a: " Andre Gide",
  },
  {
    q: "Numbing the pain for a while will make it worse when you finally feel it.",
    a: "J.K. Rowling",
  },
  {
    q: "Some old wounds never truly heal, and bleed again at the slightest word.",
    a: "George R.R. Martin",
  },
  { q: "You’re just another story I can’t tell anymore.", a: "Unknown" },
];

function generateCode() {
  var min = 0;
  var max = quotes.length - 1;

  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("quote").innerHTML = quotes[random];
  var selectedQuote = quotes[random].q;
  var selectedAuthor = quotes[random].a;
  document.getElementById("quote").innerHTML = '"' + selectedQuote + '."';
  document.getElementById("author").innerHTML = "-- " + selectedAuthor;
}
