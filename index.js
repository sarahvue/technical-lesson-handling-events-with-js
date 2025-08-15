const dodger = document.getElementById("dodger");

// Ensure that the 'left' style is set as a number on load
dodger.style.left = "180px"; // Set initial position

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`; // Move left by 10px
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {
    // Prevent going past the screen width (360px max)
    dodger.style.left = `${left + 10}px`; // Move right by 10px
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
