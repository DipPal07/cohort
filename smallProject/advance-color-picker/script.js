const colorPicker = document.querySelector("#colorPicker");
const colorValue = document.querySelector("#colorValue");
const copyBtn = document.querySelector("#copyBtn");
const complementaryColors = document.querySelector(".complementary-colors");
const copyComplementryBtn = document.querySelector("#copyComplementryBtn");
const saves = document.querySelector("#saves");
const saveColor = [];
function complementaryColorGenerator(hex) {
  let complementaryColorHex = 0xffffff ^ parseInt(hex.slice(1), 16);
  return `#${complementaryColorHex.toString(16).padStart(6, "0")}`;
}
function setComplementaryColor() {
  complementaryColors.style.backgroundColor = complementaryColorGenerator(
    colorPicker.value
  );
}
colorPicker.addEventListener("input", function () {
  colorValue.innerText = colorPicker.value;
  setComplementaryColor();
});
function createSaveColor() {
  saves.innerHTML = "";
  saveColor.forEach((color) => {
    const p = document.createElement("p");
    p.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      p.innerText = "Copied!";
      p.classList.add("copied");
      setTimeout(() => {
        p.classList.remove("copied");
        p.innerText = color;
      }, 2000);
    });
    p.innerText = color;
    p.classList.add("save-element");
    p.style.backgroundColor = color;
    saves.appendChild(p);
  });
  console.log(saveColor);
}

function pushSaveColor(color) {
  if (saveColor.length < 10) {
    saveColor.unshift(color);
  } else {
    saveColor.pop();
    saveColor.unshift(color);
  }

  createSaveColor();
}
setComplementaryColor();
function copyColor(x) {
  if (x.getAttribute("id") === "copyBtn") {
    const color = colorValue.innerText;

    pushSaveColor(color);

    navigator.clipboard.writeText(color);
    copyBtn.innerText = "Copied!";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.innerText = "Copy";
    }, 2000);
    return;
  }
  let color = complementaryColors.style.backgroundColor;
  navigator.clipboard.writeText(color);
  pushSaveColor(color);
  x.innerText = "complementary color copied !";
  x.classList.add("copied");
  setTimeout(() => {
    x.classList.remove("copied");
    x.innerText = "Copy complementary color !";
  }, 2000);
}
