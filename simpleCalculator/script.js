const expression = document.getElementById("expression");

const result = document.getElementById("result");

function calculate() {
  try {
    const value = eval(expression.value);
    expression.value = "";
    result.innerText =
      value === Infinity ? "please enter valid operand" : `result : ${value}`;
  } catch (error) {
    result.innerText = "Invalid Expression";
    result.style.color = "red";
  }
}
