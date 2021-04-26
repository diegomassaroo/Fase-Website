function darkModeButton() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
