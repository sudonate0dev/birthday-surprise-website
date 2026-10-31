
// ============================================
// ELEMENTS
// ============================================

const heartScene = document.getElementById("heartScene");
const starScene = document.getElementById("starScene");

const finalMessage = document.getElementById("finalMessage");

const decorations = document.getElementById("decorations");


// ============================================
// ANIMATION TIMING
// ============================================

const DRAW_DURATION = 6000;
const PHOTO_DELAY = 6200;

const HEART_DURATION = 12500;
const TRANSITION_DELAY = 1200;
const STAR_DURATION = 12500;

const RESTART_DELAY = 2000;


// ============================================
// FLOATING DECORATIONS
// ============================================

const decorationItems = [
  "🌸",
  "🌷",
  "🌺",
  "🌼",
  "🌹",
  "🌻",
  "🦋",
  "✨",
  "💗",
  "❀",
  "⭐",
  "💫",
  "✦"
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


// ============================================
// STARTING DECORATIONS
// ============================================

function startDecorations() {

  decorations.innerHTML = "";

  // Start with some flowers and sparkles already visible.
  for (let i = 0; i < 12; i++) {

    setTimeout(() => {
      createDecoration();
    }, i * 300);

  }

}


// ============================================
// RESET ANIMATION
// ============================================

function resetScene(scene) {

  scene.classList.remove(
    "playing",
    "finished",
    "active"
  );

  // Force browser to reset the animations.
  void scene.offsetWidth;

}


// ============================================
// PLAY HEART
// ============================================

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


// ============================================
// PLAY STAR
// ============================================

function playStar() {

  heartScene.classList.add("finished");

  starScene.style.display = "flex";

  // Reset the star before showing it.
  resetScene(starScene);

  requestAnimationFrame(() => {

    starScene.classList.add("playing");
    starScene.classList.add("active");

  });

}


// ============================================
// COMPLETE ANIMATION
// ============================================

function showFinalMessage() {

  finalMessage.classList.add("show");

}


// ============================================
// MAIN ANIMATION SEQUENCE
// ============================================

function startMagic() {

  startDecorations();

  playHeart();

  // Heart finishes, then star starts after a pause.
  setTimeout(() => {

    playStar();

    startDecorations();

  }, HEART_DURATION + TRANSITION_DELAY);


  // Show the final birthday message after the star.
  setTimeout(() => {

    showFinalMessage();

  }, HEART_DURATION + TRANSITION_DELAY + 14000);


  // Restart the entire experience.
  setTimeout(() => {

    startMagic();

  }, HEART_DURATION + TRANSITION_DELAY + STAR_DURATION + RESTART_DELAY);

}


// ============================================
// CONTINUOUS FLOATING FLOWERS
// ============================================

setInterval(() => {

  createDecoration();

}, 1100);


// ============================================
// BEGIN
// ============================================

startMagic();
