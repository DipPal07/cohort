/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const gameContainer = document.querySelector("#gameContainer");
const time = document.querySelector("#time");
const moves = document.querySelector("#moves");
let intervalId;
let flippedCards = [];
let matchedCards = [];
let timer = 0;
let moveCount = 0;
function cardCreate(image) {
  const div = document.createElement("div");
  div.classList.add("card");
  // div.classList.add("card-front");
  const frontCard = document.createElement("div");
  frontCard.classList.add("card-front");
  const backCard = document.createElement("div");
  backCard.classList.add("card-back");
  div.appendChild(frontCard);
  div.appendChild(backCard);

  backCard.style.backgroundImage = `url(${image})`;
  gameContainer.appendChild(div);
  div.addEventListener("click", () => {
    moveCount++;
    moves.textContent = moveCount;
    div.classList.toggle("flipped");
    intervalId = setInterval(() => {
      timer += 0.1;
      time.textContent = timer.toFixed(2);
    }, 100);
    setTimeout(() => {
      div.classList.toggle("flipped");
    }, 500);
  });
}

function restartGame() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.remove("flipped");
  });
  clearInterval(intervalId);
  time.textContent = "0.00";
}

for (let i = 0; i < 16; i++) {
  cardCreate(images[Math.floor(Math.random() * images.length)].url);
}
