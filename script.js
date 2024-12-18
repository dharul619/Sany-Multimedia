// NAVBAR SECTION START
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// NAVBAR SECTION END

const showMoreButton = document.getElementById("showMoreButton");
const youtubePopupContainer = document.querySelector(
  ".youtube-popup-container"
);
const popupClose = document.querySelector(".popup-close");
const youtubeVideo = document.getElementById("youtubeVideo");

const videoURL = "https://youtu.be/eGCKZPRQTdQ?si=IFqeieZGc8hakWxy";

showMoreButton.addEventListener("click", () => {
  youtubePopupContainer.style.display = "flex";
  youtubeVideo.src = videoURL + "?autoplay=1";
});

// Close the pop-up when the close button is clicked
popupClose.addEventListener("click", () => {
  youtubePopupContainer.style.display = "none";
  youtubeVideo.src = "";
});

// Close the pop-up when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === youtubePopupContainer) {
    youtubePopupContainer.style.display = "none";
    youtubeVideo.src = "";
  }
});

// video Section End

// PRODUCT SECTION START

// PRODUCT SECTION END

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
