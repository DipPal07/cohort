/**
 * Write your challenge solution here
 */
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const ageInput = document.querySelector("#ageInput");
const bioInput = document.querySelector("#bioInput");

const nameDisplay = document.querySelector("#nameDisplay");
const jobDisplay = document.querySelector("#jobDisplay");
const ageDisplay = document.querySelector("#ageDisplay");
const bioDisplay = document.querySelector("#bioDisplay");

nameInput.addEventListener("keyup", () => {
  nameDisplay.innerText = nameInput.value;
});
jobInput.addEventListener("keyup", () => {
  jobDisplay.innerText = jobInput.value;
});
ageInput.addEventListener("keyup", () => {
  ageDisplay.innerText = ageInput.value;
});
bioInput.addEventListener("keyup", () => {
  bioDisplay.innerText = bioInput.value;
});
