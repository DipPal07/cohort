const timer = document.getElementById("timer");
const date = document.getElementById("date");

function updateClock() {
  const dateObj = new Date();
  const currentDate = dateObj.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  date.innerText = currentDate;
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const second = dateObj.getSeconds();
  const hour12 = hour % 12 || 12;
  timer.innerText = `${hour12.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")} ${
    hour > 12 ? "PM" : "AM"
  }`;
}
updateClock();

setInterval(updateClock, 1000);
