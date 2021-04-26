function darkModeButton() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function closeLayer() {
  var x = document.getElementById("dropdown-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}