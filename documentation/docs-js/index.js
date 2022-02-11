var burger = document.getElementById("burger");
var mobileSec = document.getElementById("mobile-section");
var cancelBtn = document.getElementById("cancel");
var dropDownBtn = document.getElementById("dropdown-btn");
var dropDownList = document.getElementById("dropdown-list");
var sideContainer = document.getElementById("side-container");

let dropdownListExpanded = false;

mobileSec.style.display = "none";

burger.addEventListener("click", () => {
  burger.style.display = "none";
  mobileSec.style.display = "block";
});

cancel.addEventListener("click", () => {
  burger.style.display = "block";
  mobileSec.style.display = "none";
});

dropDownBtn.addEventListener("click", () => {
  dropDownBtn.classList.remove("downside-btn");
  dropDownBtn.classList.remove("upside-btn");
  if (dropdownListExpanded) {
    dropDownBtn.classList.add("downside-btn");
    dropdownListExpanded = false;
    dropDownList.style.display = "none";
  }
  else {
    dropDownBtn.classList.add("upside-btn");
    dropdownListExpanded = true;
    dropDownList.style.display = "block";
  }
});