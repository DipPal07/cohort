const input = document.querySelector("#input");
const output = document.querySelector("#output");

function checkPalindrome() {
  const inputValue = input.value;
  input.value = "";
  if (!inputValue) {
    output.innerText = "Please enter a value";
    return;
  }
  let reversValue = inputValue.split("").reverse().join("");
  if (inputValue === reversValue) {
    output.innerText = `${inputValue} is a palindrome`;
    return;
  }
  output.innerText = `${inputValue} is not a palindrome`;
}
