var burger = document.getElementById("burger");
var mobileSec = document.getElementById("mobile-section");
var cancelBtn = document.getElementById("cancel");
var dropDownBtn = document.getElementById("dropdown-btn");
var dropDownList = document.getElementById("dropdown-list");
var scrollToTopBtn = document.getElementById("scroll-btn");
var closeBtnAlert = document.getElementById("close-btn");
var closeAlert = document.getElementById("close-alert");
var inputEmail = document.getElementById("email-valid");
var inputPassword = document.getElementById("password-valid");
var inputCheckBox = document.getElementById("checkbox-valid");
const errorMsg = document.getElementsByClassName("error-msg");
var submitBtn = document.getElementById("submit-btn");

errorMsg[0].style.display = "none";
errorMsg[1].style.display = "none";
errorMsg[2].style.display = "none";

submitBtn.addEventListener("click", () => {
  checkValidEmail();
  checkValidPassword();
  checkCheckBox();
});

function checkCheckBox() {
  if (!inputCheckBox.checked) {
    errorMsg[2].style.display = "block";
  }
  else {
    errorMsg[2].style.display = "none";
  }
}

function checkValidPassword() {
  if (inputPassword.value.length < 8) {
    errorMsg[1].style.display = "block";
  }
  else {
    errorMsg[1].style.display = "none";
  }
}

function checkValidEmail() {
  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  console.log(inputEmail.value);
  console.log(emailPattern.test(inputEmail.value));
  if (!emailPattern.test(inputEmail.value)) {
    errorMsg[0].style.display = "block";
  }
  else {
    errorMsg[0].style.display = "none";
  }
}

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
    window.scrollTo(0, 0);
    dropDownBtn.classList.add("upside-btn");
    dropdownListExpanded = true;
    dropDownList.style.display = "block";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

closeBtnAlert.addEventListener("click", () => {
  closeAlert.style.display = "none";
});