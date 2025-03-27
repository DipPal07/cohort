const input = document.querySelector("#input");
const output = document.querySelector("#output");
const wordCount = document.querySelector("#wordCount");
input.addEventListener("input", (e) => {
  const text = e.target.value;
  const charCount = text.length;

  output.style.color = "green";
  if (charCount > 190) {
    output.style.color = "orange";
  }
  if (charCount > 200) {
    input.value = text.slice(0, 200);
    output.innerText = `200/200 Characters`;
    output.style.color = "red";
    return;
  }

  output.innerText = `${charCount}/200 Characters`;
});
function showWordCount() {
  const text = input.value;
  const x = {};
  text.split(" ")?.forEach((element) => {
    x[element] = x[element] ? x[element] + 1 : 1;
  });
  for (const key in x) {
    wordCount.innerHTML += `<li>${key}: ${x[key]}</li>`;
  }
}
