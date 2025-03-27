/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector(".toggle-btn");
const panel = document.querySelector(".panel");
const closeBtn = document.querySelector(".close-btn");

function togglePanel() {
  panel.classList.toggle("active");
}

toggleBtn.addEventListener("click", togglePanel);
closeBtn.addEventListener("click", togglePanel);
