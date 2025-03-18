const showTimer = document.getElementById("show-time");
const time = document.getElementById("time");
const btn = document.getElementById("btn");
let timerId;
let timeLeft = 0;
function toggleTimer() {
  timeLeft = parseInt(time.value) || timeLeft;

  time.value = "";
  if (!timeLeft || timeLeft <= 0) {
    alert("Please enter a valid time");
    return;
  }

  if (timerId) {
    btn.innerText = "Start Countdown";
    btn.classList.remove("active");
    console.log(timerId);
    clearInterval(timerId);
    timerId = null;
    return;
  }
  btn.innerText = "Stop Countdown";
  btn.classList.add("active");

  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      btn.innerText = "Start Countdown";
      btn.classList.remove("active");
      timerId = null;
    }
    showTimer.innerHTML = timeLeft.toString().padStart(4, "0");
    timeLeft--;
  }, 1000);
}
