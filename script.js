const confettiRoot = document.getElementById("confetti");
const confettiBtn = document.getElementById("confettiBtn");
const lightBtn = document.getElementById("lightBtn");
const spotlight = document.getElementById("spotlight");
const starsRoot = document.getElementById("stars");
const bg = document.getElementById("bg");
const shineTargets = document.querySelectorAll(".card, .message, .panel");

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

function spawnStars(count = 80) {
  starsRoot.innerHTML = "";
  const { innerWidth: w, innerHeight: h } = window;
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * w}px`;
    star.style.top = `${Math.random() * h}px`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsRoot.appendChild(star);
  }
}

function launchShootingStar() {
  const star = document.createElement("span");
  star.className = "shooting-star";
  star.style.top = `${Math.random() * 40 + 5}vh`;
  star.style.left = `${Math.random() * 40 + 10}vw`;
  document.body.appendChild(star);
  window.setTimeout(() => {
    star.remove();
  }, 1400);
}

let lastMove = 0;
window.addEventListener("pointermove", (event) => {
  const now = Date.now();
  if (now - lastMove < 30) return;
  lastMove = now;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;
  bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

shineTargets.forEach((el) => el.classList.add("shine"));

window.addEventListener("resize", () => {
  spawnStars(80);
});

window.addEventListener("load", () => {
  spawnStars(90);
  window.setTimeout(() => spawnConfetti(90), 600);
  window.setInterval(launchShootingStar, 2800);
});
