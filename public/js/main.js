document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("birthdayMusic");
  const musicButton = document.getElementById("musicButton");
  const musicIcon = document.getElementById("musicIcon");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const toast = document.getElementById("toast");

  // ------------------------------------------------------------
  // MOBILE NAVIGATION
  // ------------------------------------------------------------
  menuToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  // ------------------------------------------------------------
  // MUSIC
  // Browser autoplay rules mean music starts after a user click.
  // ------------------------------------------------------------
  musicButton?.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicButton.classList.add("playing");
        musicIcon.textContent = "♫";
        showToast("Birthday music is playing ♡");
      } else {
        music.pause();
        musicButton.classList.remove("playing");
        musicIcon.textContent = "♪";
        showToast("Music paused");
      }
    } catch (error) {
      showToast("Add your music file to public/media first.");
    }
  });

  // ------------------------------------------------------------
  // SCROLL REVEALS
  // ------------------------------------------------------------
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  // ------------------------------------------------------------
  // SPARKLE BUTTON
  // ------------------------------------------------------------
  document.getElementById("sparkleButton")?.addEventListener("click", (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    for (let i = 0; i < 24; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.textContent = Math.random() > 0.45 ? "✦" : "♡";
      sparkle.style.left = `${originX}px`;
      sparkle.style.top = `${originY}px`;
      sparkle.style.fontSize = `${10 + Math.random() * 18}px`;
      sparkle.style.color = Math.random() > 0.5 ? "#f5c6d0" : "#d9b779";
      sparkle.style.setProperty("--x", `${(Math.random() - .5) * 300}px`);
      sparkle.style.setProperty("--y", `${(Math.random() - .5) * 250}px`);
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 950);
    }
  });

  // ------------------------------------------------------------
  // GALLERY LIGHTBOX
  // ------------------------------------------------------------
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightboxContent");
  const lightboxCaption = document.getElementById("lightboxCaption");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.dataset.media;
      const type = item.dataset.type;
      const poster = item.dataset.poster;
      const caption = item.dataset.caption;

      if (type === "video") {
        lightboxContent.innerHTML =
          `<video controls autoplay ${poster ? `poster="${poster}"` : ""}>
             <source src="${src}" type="video/mp4">
           </video>`;
      } else {
        lightboxContent.innerHTML = `<img src="${src}" alt="${caption}">`;
      }

      lightboxCaption.textContent = caption;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
  }

  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  // ------------------------------------------------------------
  // GIFT SELECTION
  // ------------------------------------------------------------
  const giftResult = document.getElementById("giftResult");
  const giftResultTitle = document.getElementById("giftResultTitle");
  const giftResultMessage = document.getElementById("giftResultMessage");

  document.querySelectorAll(".gift-card").forEach((card) => {
    card.addEventListener("click", async () => {
      const giftId = card.dataset.giftId;

      try {
        const response = await fetch("/gift", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ giftId })
        });

        const result = await response.json();

        if (!result.success) {
          showToast(result.message);
          return;
        }

        document.querySelectorAll(".gift-card").forEach((item) => {
          item.style.opacity = ".45";
        });
        card.style.opacity = "1";

        giftResultTitle.textContent = result.gift.title;
        giftResultMessage.textContent = result.message;
        giftResult.hidden = false;

        giftResult.scrollIntoView({ behavior: "smooth", block: "center" });
        launchMiniCelebration();
      } catch (error) {
        showToast("Something went wrong. Please try again.");
      }
    });
  });

  document.getElementById("surpriseButton")?.addEventListener("click", () => {
    window.location.href = "/surprise";
  });

  // ------------------------------------------------------------
  // MINI CELEBRATION
  // ------------------------------------------------------------
  function launchMiniCelebration() {
    const symbols = [
  "♡",
  "♥",
  "✦",
  "✧",
  "✨",
  "🌸",
  "🦋",
  "💗"
];

    for (let i = 0; i < 35; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      sparkle.style.left = `${Math.random() * window.innerWidth}px`;
      sparkle.style.top = `${window.innerHeight * .45}px`;
      sparkle.style.fontSize = `${12 + Math.random() * 25}px`;
      sparkle.style.color = Math.random() > .5 ? "#f5c6d0" : "#d9b779";
      sparkle.style.setProperty("--x", `${(Math.random() - .5) * 500}px`);
      sparkle.style.setProperty("--y", `${-150 - Math.random() * 350}px`);
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
});


// ------------------------------------------------------------
// FALLING FLOWER PETALS
// ------------------------------------------------------------

function createPetal() {
  const container = document.getElementById("petalContainer");
  if (!container) return;

  const petal = document.createElement("span");
  petal.className = "petal";

  const flowers = ["🌸", "🌷", "🌺", "🌼", "💮", "✿", "❀"];

  petal.textContent =
    flowers[Math.floor(Math.random() * flowers.length)];

  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${7 + Math.random() * 7}s`;
  petal.style.fontSize = `${16 + Math.random() * 17}px`;
  petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);

  container.appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
}

// More flowers, appearing at shorter intervals
setInterval(createPetal, 350);


// ------------------------------------------------------------
// FLOATING TWINKLING STARS
// ------------------------------------------------------------

function createStar() {
  const container = document.getElementById("petalContainer");
  if (!container) return;

  const star = document.createElement("span");
  star.className = "floating-star";
  star.textContent = Math.random() > 0.5 ? "✦" : "✧";

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${9 + Math.random() * 13}px`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;

  container.appendChild(star);

  setTimeout(() => star.remove(), 5500);
}

// Small number of stars so they remain subtle
setInterval(createStar, 1100);

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");

if (backgroundMusic && musicButton) {
  musicButton.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();

        musicIcon.textContent = "♫";
        musicLabel.textContent = "Pause";
      } catch (error) {
        console.error("Music playback failed:", error);
      }
    } else {
      backgroundMusic.pause();

      musicIcon.textContent = "♫";
      musicLabel.textContent = "Music";
    }
  });
}