let body = document.querySelector("#body");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let reset = document.querySelector("#reset");

red.addEventListener("click", function () {
  body.style.background = "red";
});
yellow.addEventListener("click", function () {
  body.style.background = "yellow";
});
blue.addEventListener("click", function () {
  body.style.background = "blue";
});
green.addEventListener("click", function () {
  body.style.background = "green";
});
reset.addEventListener("click", function () {
  body.style.background = "white";
});
