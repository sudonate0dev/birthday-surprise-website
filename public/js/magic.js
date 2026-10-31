
const heartScene = document.getElementById("heartScene");
const starScene = document.getElementById("starScene");
const finalMessage = document.getElementById("finalMessage");
const decorations = document.getElementById("decorations");


const HEART_DURATION = 12500;
const TRANSITION_DELAY = 1200;
const STAR_DURATION = 12500;
const RESTART_DELAY = 8000;


const decorationItems = [
  "🌸", "🌷", "🌺", "🌼", "🌹",
  "🌻", "🦋", "✨", "💗", "❀",
  "⭐", "💫", "✦", "💕", "💖",
];

function createDecoration() {
  const item = document.createElement("span");

  item.className = "magic-decoration";

  item.textContent =
    decorationItems[
      Math.floor(Math.random() * decorationItems.length)
    ];

  item.style.left = `${Math.random() * 100}%`;

  item.style.fontSize =
    `${18 + Math.random() * 28}px`;

  item.style.animationDuration =
    `${8 + Math.random() * 8}s`;

  decorations.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 17000);
}


function startDecorations() {
  decorations.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createDecoration();
    }, i * 300);
  }
}

function resetScene(scene) {
  scene.classList.remove(
    "playing",
    "finished",
    "active"
  );

  void scene.offsetWidth;
}

function playHeart() {
  resetScene(heartScene);
  resetScene(starScene);

  finalMessage.classList.remove("show");

  heartScene.style.display = "flex";
  starScene.style.display = "none";

  requestAnimationFrame(() => {
    heartScene.classList.add("playing");
  });
}


function playStar() {
  heartScene.classList.add("finished");

  starScene.style.display = "flex";

  resetScene(starScene);

  requestAnimationFrame(() => {
    starScene.classList.add("playing");
    starScene.classList.add("active");
  });
}

function showFinalMessage() {
  finalMessage.classList.add("show");
}


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startMagic() {

  while (true) {

    // Start the decorations and heart.
    startDecorations();
    playHeart();

    // Wait for the heart animation and transition.
    await wait(HEART_DURATION + TRANSITION_DELAY);

    // Start the star animation.
    playStar();
    startDecorations();

    // Wait for the star animation to finish.
    await wait(STAR_DURATION);

    // Display the final birthday message.
    showFinalMessage();

    // IMPORTANT: Keep the final message visible for 8 seconds.
    await wait(RESTART_DELAY);

    // Only now does the next cycle begin.
  }

}

setInterval(() => {
  createDecoration();
}, 1100);


startMagic();
