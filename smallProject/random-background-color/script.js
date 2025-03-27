function randomColor() {
  return Math.floor(Math.random() * 256);
}
function bgChange() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
