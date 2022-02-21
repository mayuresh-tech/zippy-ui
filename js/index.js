var burger = document.getElementById("burger");
var mobileSec = document.getElementById("mobile-section");
var cancelBtn = document.getElementById("cancel");

mobileSec.style.display = "none";

burger.addEventListener("click", () => {
  burger.style.display = "none";
  mobileSec.style.display = "block";
});

cancel.addEventListener("click", () => {
  burger.style.display = "block";
  mobileSec.style.display = "none";
});
