/**
 * Write your challenge solution here
 */
const toggleButton = document.querySelector('#toggleButton');
const bulbStatus = document.querySelector('#status');
const bulb = document.querySelector('#bulb');

toggleButton.addEventListener('click', () => {
  const color = bulb.style.backgroundColor;

  if (bulb.classList.contains('off')) {
    // bulb.style.backgroundColor = 'yellow';
    bulb.classList.remove(['off']);
    bulb.classList.add(['on']);
    bulbStatus.innerText = 'Status: On';
    toggleButton.innerText = 'Turn Off';
  } else {
    bulb.classList.remove(['on']);
    bulb.classList.add(['off']);
    bulbStatus.innerText = 'Status: Off';
    toggleButton.innerText = 'Turn On';
  }
});
