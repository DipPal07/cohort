const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.querySelector("#carouselTrack");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const carouselNav = document.querySelector("#carouselNav");
const autoPlayButton = document.querySelector("#autoPlayButton");
const caption = document.querySelector("#caption");
const timerDisplay = document.querySelector("#timerDisplay");
const intervalTime = 3000;
caption.innerText = images[0].caption;
let timer;

images.forEach((image, index) => {
  const img = document.createElement("img");
  img.setAttribute("src", image.url);
  img.classList.add("carousel-slide");
  carouselTrack.appendChild(img);
  const dot = document.createElement("span");
  dot.classList.add("carousel-indicator");
  carouselNav.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-indicator");
dots[0].classList.add("active");
let index = 0;
let autoplay = false;
let interval;
const autoPlayText = () => {
  clearInterval(timer);
  let time = 1000;
  timer = setInterval(() => {
    timerDisplay.innerText = `Next Slide in ${Math.round(
      (intervalTime - time) / 1000
    )}s`;
    time += 1000;
  }, 1000);
};
const stopAutoPlayText = () => {
  clearInterval(timer);
  timerDisplay.innerText = "";
};
function autoPlayToggle() {
  if (!autoplay) {
    autoPlayText();
    interval = setInterval(() => {
      next();
      autoPlayText();
    }, intervalTime);
    autoplay = true;
    autoPlayButton.innerText = "Stop Auto Play";
    // autoPlayText();
  } else {
    clearInterval(interval);
    autoplay = false;
    stopAutoPlayText();
    autoPlayButton.innerText = "Start Auto Play";
  }
}
function removeActive() {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}
function next() {
  console.log("next");
  removeActive();
  index++;
  if (images.length <= index) {
    index = 0;
  }
  caption.innerText = images[index].caption;
  dots[index].classList.add("active");
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}
function prev() {
  index--;
  removeActive();
  dots[index].classList.add("active");
  if (index < 0) {
    index = images.length - 1;
  }
  caption.innerText = images[index].caption;
  console.log(index);

  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
autoPlayButton.addEventListener("click", autoPlayToggle);
