const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "The best way to predict the future is to create it. — Abraham Lincoln",
  "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
  "It is never too late to be what you might have been. — George Eliot",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
  "The journey of a thousand miles begins with one step. — Lao Tzu",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
];

const quote = document.getElementById("quote");

function getQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random];
}
