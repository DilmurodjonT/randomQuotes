function generate() {
  var quotes = {
    "- Deepak Chopra":
      "Don't join the book burners. Don't think you're going to conceal faults by concealing evidence that they ever existed. Don't be afraid to go in your library and read every book...",
    "-C.S Lewis":
      "Those who will not reason, are bigots, those who cannot, are fools, and those who dare not, are slaves.",
    "― Janet Fitch":
      "She would be half a planet away, floating in a turquoise sea, dancing by moonlight to flamenco guitar.",
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
