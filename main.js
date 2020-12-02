const popupOverlay = document.querySelector(".popup-overlay");
const popupClose = document.querySelector(".popup-close");

popupClose.addEventListener("click", () => {
  popupOverlay.style.display = "none";
  localStorage.setItem("popupDisplayed", "true");
});

setTimeout(() => {
   {
    popupOverlay.style.display = "block";
  }
}, 500);