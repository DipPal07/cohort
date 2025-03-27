/**
 * Write your challenge solution here
 */

const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total h3");

let total = 0;
let order = [];
function addToCart(name, price) {
  total += price;
  console.log(total);
  cartTotal.innerText = `Total: ${total.toFixed(2)}`;

  document.querySelector(".empty-cart").style.display = "none";
  const item = document.createElement("div");
  const add = document.createElement("button");
  add.innerText = "+";
  const minus = document.createElement("button");
  minus.innerText = "-";
  const remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.addEventListener("click", () => {
    item.remove();
    total -= price * Number(quantity.innerText);
    cartTotal.innerText = `Total: ${total.toFixed(2)}`;
  });
  add.onclick = () => {
    quantity.innerText = Number(quantity.innerText) + 1;
    total += price;
    cartTotal.innerText = `Total: ${total.toFixed(2)}`;
  };
  minus.onclick = () => {
    if (Number(quantity.innerText) === 1) return;
    quantity.innerText = Number(quantity.innerText) - 1;
    total -= price;
    cartTotal.innerText = `Total: ${total.toFixed(2)}`;
  };
  const pricing = document.createElement("span");
  const quantity = document.createElement("span");
  quantity.innerText = "1";
  pricing.appendChild(minus);
  pricing.appendChild(quantity);
  pricing.appendChild(add);
  pricing.appendChild(document.createTextNode(price));
  item.innerText = name;
  item.appendChild(pricing);
  pricing.appendChild(remove);

  item.className = "cart-item";

  cartItems.appendChild(item);
}
