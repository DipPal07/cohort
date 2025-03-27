const output = document.querySelector("#output");
const dice = document.querySelector("#dice");
const diceSide = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
function rollDice() {
  const index = Math.floor(Math.random() * 6);
  dice.innerText = diceSide[index];
  output.innerText = `You rolled a ${index + 1}`;
}
