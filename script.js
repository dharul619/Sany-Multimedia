// NAVBAR SECTION START
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// NAVBAR SECTION END

// video Section Start
// Get elements
const showMoreButton = document.getElementById("showMoreButton");
const youtubePopupContainer = document.querySelector(
  ".youtube-popup-container"
);
const popupClose = document.querySelector(".popup-close");
const youtubeVideo = document.getElementById("youtubeVideo");

// YouTube Video URL
const videoURL = "https://youtu.be/eGCKZPRQTdQ?si=IFqeieZGc8hakWxy"; // Ganti dengan URL video Anda

// Show the pop-up when the button is clicked
showMoreButton.addEventListener("click", () => {
  youtubePopupContainer.style.display = "flex"; // Display pop-up as a flexbox
  youtubeVideo.src = videoURL + "?autoplay=1"; // Add autoplay parameter
});

// Close the pop-up when the close button is clicked
popupClose.addEventListener("click", () => {
  youtubePopupContainer.style.display = "none";
  youtubeVideo.src = ""; // Remove video URL to stop playback
});

// Close the pop-up when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === youtubePopupContainer) {
    youtubePopupContainer.style.display = "none";
    youtubeVideo.src = ""; // Remove video URL to stop playback
  }
});

// video Section End

// GALLERI SECTION START
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
// GALLERY SECTION END

const openBtn = document.getElementById("submit");
const closeBtn = document.getElementById("closemodal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
