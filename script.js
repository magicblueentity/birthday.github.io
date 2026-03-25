const confettiRoot = document.getElementById("confetti");
const confettiBtn = document.getElementById("confettiBtn");
const lightBtn = document.getElementById("lightBtn");
const spotlight = document.getElementById("spotlight");

const colors = ["#ffb347", "#61d4ff", "#ff5fd1", "#9bff7a", "#ffffff"];

function spawnConfetti(count = 120) {
  confettiRoot.innerHTML = "";
  const { innerWidth: w, innerHeight: h } = window;

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    const size = Math.random() * 8 + 6;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.6}px`;
    piece.style.left = `${Math.random() * w}px`;
    piece.style.top = `${-Math.random() * h}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    confettiRoot.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiRoot.innerHTML = "";
  }, 1600);
}

confettiBtn.addEventListener("click", () => {
  spawnConfetti(140);
});

lightBtn.addEventListener("click", () => {
  spotlight.classList.toggle("active");
});

window.addEventListener("load", () => {
  window.setTimeout(() => spawnConfetti(80), 600);
});
