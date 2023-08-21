const playBtn = document.querySelector(".ri-play-circle-line");
const trailer = document.querySelector(".trailer-container");
const exitBtn = document.querySelector(".close-icon");
const video = document.querySelector("video");

console.log(trailer);

playBtn.addEventListener("click", () => trailer.classList.remove("active"));
exitBtn.addEventListener("click", () => {
  trailer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
