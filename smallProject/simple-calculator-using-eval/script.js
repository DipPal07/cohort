const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operator) {
  switch (operator) {
    case "+":
      result.innerText = `result : ${
        parseInt(num1.value) + parseInt(num2.value)
      }`;
      break;
    case "-":
      result.innerText = `result : ${
        parseInt(num1.value) - parseInt(num2.value)
      }`;
      break;
    case "*":
      result.innerText = `result : ${
        parseInt(num1.value) * parseInt(num2.value)
      }`;
      break;
    case "/":
      result.innerText = `result : ${
        parseInt(num1.value) / parseInt(num2.value) === Infinity
          ? "Can't divide by zero"
          : parseInt(num1.value) / parseInt(num2.value)
      }`;
      break;
    default:
      result.innerText = "Invalid operation";
      result.style.color = "red";
  }
}
