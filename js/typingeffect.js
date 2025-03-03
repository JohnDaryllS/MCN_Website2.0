const text = "Welcome to Model Cooperative Network";
let index = 0;
const speed = 100;
const delayBeforeRestart = 5000;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typing-text").textContent = "";
      index = 0;
      typeEffect();
    }, delayBeforeRestart);
  }
}

window.onload = function () {
  setTimeout(typeEffect, 8000);
};
