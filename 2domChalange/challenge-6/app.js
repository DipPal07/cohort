/**
 * Write your challenge solution here
 */

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const digitalClock = document.querySelector(".digital-clock");

setInterval(() => {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  second.style.transform = `rotate(${s * 6}deg)`;
  minute.style.transform = `rotate(${m * 6}deg)`;
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`;
  digitalClock.innerText = `${h}:${m}:${s}`;
}, 1000);
