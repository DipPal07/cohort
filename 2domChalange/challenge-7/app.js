/**
 * Write your challenge solution here
 */
const accordionButton = document.querySelectorAll(".accordion-button");
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
