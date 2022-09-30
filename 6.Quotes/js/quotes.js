const quotes = [
{
  quote: "If you don't live the way you think, you'll think the way you live.",
  author:"Paul Valéry Quotes",
},
{
  quote: "Desire makes everything blossom; possession makes everything wither and fade.",
  author:"Marcel Proust",
},
{
  quote: "Hide not your talents. They for use were made. What's a sundial in the shade.",
  author:"Benjamin Franklin",
},
{
  quote: "They must often change who would be constant in happiness or wisdom.",
  author:"Confucius",
},
{
  quote: "Those who cannot remember the past are condemned to repeat it.",
  author:"George Santayana",
},
{
  quote: "The whole life of man is but a point of time; let us enjoy it.",
  author:"Plutarch",
},
{
  quote: "Laziness is nothing more than the habit of resting before you get tired.",
  author:"Jules Renard",
},
{
  quote: "I'd rather be hated for who I am than be loved for who I'm not.",
  author:"Kurt Cobain",
},
{
  quote: "Tis the most tender part of love, each other to forgive.",
  author:"John Sheffield",
},
{
  quote: "To love deeply in one direction makes us more loving in all others.",
  author:"Anne-Sophie Swetchine",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[10 - 1]);
// Math.round(1.X) -> 반올림된 숫자를 표기한다.
// Math.ceil(1.x) -> 올림된 숫자를 표기한다.
// Math.floor(1.x) -> 내림된 숫자를 표기한다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;