var colors = document.querySelectorAll(".color");
var h3 = document.querySelector("h3");
var randomBtn = document.querySelector("button");

function randomBackground() {
  for (var i = 0; i < 2; i++) {
    var r = Math.floor(Math.random() * 256).toString(16);
    var g = Math.floor(Math.random() * 256).toString(16);
    var b = Math.floor(Math.random() * 256).toString(16);
    colors[i].value = "#" + r + g + b;
    console.log(
      i === 0
        ? "colors[0]: " + colors[i].value
        : "colors[1]: " + colors[i].value
    );
  }
  setGradient();
}

function setGradient() {
  document.body.style.background =
    "linear-gradient(to right," + colors[0].value + "," + colors[1].value + ")";
  h3.textContent = document.body.style.background;
}

colors.forEach(function() {
  this.addEventListener("input", setGradient);
});

randomBtn.addEventListener("click", randomBackground);

randomBackground();
