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
const carouselNav = document.querySelector("#carouselNav");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const autoPlayButton = document.querySelector("#autoPlayButton");
const caption = document.querySelector("#caption");

images.forEach((val, i) => {
  const img = document.createElement("img");
  img.setAttribute("src", val.url);
  img.classList.add("carousel-slide");
  carouselTrack.appendChild(img);

  const carouselIndicator = document.createElement("span");
  carouselIndicator.classList.add("carousel-indicator");
  carouselIndicator.dataset.index = i; // Store index for direct navigation
  carouselNav.appendChild(carouselIndicator);
});

const activeIndicator = document.querySelectorAll(".carousel-indicator");

activeIndicator[0].classList.add("active");

let index = 0;
let autoplayInterval;
let auto = false;
caption.innerText = images[index].caption;

function updateIndicators() {
  activeIndicator.forEach((val) => val.classList.remove("active"));
  activeIndicator[index].classList.add("active");
}

function prev() {
  if (index === 0) {
    index = images.length - 1; // Fix: Wrap around correctly
  } else {
    index--;
  }
  updateSlide();
}

function next() {
  index = (index + 1) % images.length; // Fix: Wrap around correctly
  updateSlide();
}

function updateSlide() {
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;
  caption.innerText = images[index].caption;
  updateIndicators();
}
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);

function startAutoplay() {
  autoplayInterval = setInterval(next, 3000);
  auto = true;
  autoPlayButton.textContent = "Stop Autoplay";
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  auto = false;
  autoPlayButton.textContent = "Start Autoplay";
}

autoPlayButton.addEventListener("click", () => {
  auto ? stopAutoplay() : startAutoplay();
});

activeIndicator.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    index = parseInt(e.target.dataset.index); // Set index to clicked indicator
    updateSlide();
  });
});
