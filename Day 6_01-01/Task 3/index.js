var container = document.getElementById("app");

var btnRed = document.getElementById("R");
btnRed.addEventListener("click", function () {
  container.classList.add("redColor");
});

var btnBlue = document.getElementById("B");
btnBlue.addEventListener("click", function () {
  container.classList.add("blueColor");
});

var btnGreen = document.getElementById("G");
btnGreen.addEventListener("click", function () {
  container.classList.add("greenColor");
});

var btnReset = document.getElementById("W");
btnReset.addEventListener("click", function () {
  container.classList.add("reset");
});
