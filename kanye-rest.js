const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (data) => {
  console.log(data);
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = data.quote;
};
