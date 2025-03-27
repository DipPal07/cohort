const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const tipAmount = document.getElementById("total-tip");
const tipPerPerson = document.getElementById("tip-per-person");
const errorMessage = document.getElementById("error-message");

function calculate() {
  const billValue = parseFloat(bill.value);
  const tipValue = parseFloat(tip.value);
  const peopleValue = parseFloat(people.value);
  bill.value = "";
  tip.value = "";
  people.value = "";
  if (!billValue || !tipValue || !peopleValue) {
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2 * 1000);
    errorMessage.style.display = "block";
    return;
  }
  const totalTip = (billValue * tipValue) / 100;

  const totalTipPoint = String(totalTip).split(".")[1]?.padEnd(2, "0") || "00";
  const totalTipPerPerson = totalTip / peopleValue;

  const totalTipPerPersonPoint =
    String(totalTipPerPerson).split(".")[1]?.padEnd(2, "0") || "00";

  tipAmount.innerText = `${Math.floor(totalTip) || "00"}.${totalTipPoint}`;
  tipPerPerson.innerText = `${
    Math.floor(totalTipPerPerson) || "00"
  }.${totalTipPerPersonPoint}`;
}
