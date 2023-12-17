var menuBar = document.querySelector("#menuBar");
var navLinks = document.querySelector(".navLinks");

navLinks.style.top = "-450px";

menuBar.onclick = function () {
  if (navLinks.style.top == "-450px") {
    navLinks.style.top = "50px";
  } else {
    navLinks.style.top = "-450px";
  }
};
