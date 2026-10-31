// ============================================
// GAME ELEMENTS
// ============================================

const gameSelection =
  document.getElementById("gameSelection");

const gameScreens =
  document.querySelectorAll(".game-screen");

const floatingDecorations =
  document.getElementById("floatingDecorations");


// ============================================
// OPEN GAME
// ============================================

function openGame(gameId) {

  gameSelection.style.display = "none";

  gameScreens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const selectedGame =
    document.getElementById(gameId);

  if (!selectedGame) return;

  selectedGame.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  // Start the correct game.

  if (gameId === "puzzleGame") {
    startPuzzle();
  }

  if (gameId === "quizGame") {
    startQuiz();
  }

}


// ============================================
// CLOSE GAME
// ============================================

function closeGame() {

  gameScreens.forEach((screen) => {
    screen.classList.remove("active");
  });

  gameSelection.style.display = "grid";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ============================================
// FLOATING DECORATIONS
// ============================================

const decorationItems = [
  "🌸",
  "🌷",
  "🌺",
  "🌼",
  "🌹",
  "🦋",
  "✨",
  "💗",
  "✦",
  "💫"
];


function createFloatingDecoration() {

  if (!floatingDecorations) return;

  const item =
    document.createElement("span");

  item.className =
    "floating-item";

  item.textContent =
    decorationItems[
      Math.floor(
        Math.random() *
        decorationItems.length
      )
    ];

  item.style.left =
    `${Math.random() * 100}%`;

  item.style.fontSize =
    `${16 + Math.random() * 25}px`;

  item.style.animationDuration =
    `${7 + Math.random() * 8}s`;

  floatingDecorations.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 16000);
}


setInterval(
  createFloatingDecoration,
  700
);


// ============================================
// ============================================
// GAME 1 — SCATTER PUZZLE
// ============================================
// ============================================

const puzzleBoard =
  document.getElementById("puzzleBoard");

const movesElement =
  document.getElementById("moves");

const puzzleTimer =
  document.getElementById("puzzleTimer");

const puzzleWin =
  document.getElementById("puzzleWin");


const GRID_SIZE = 3;

let puzzlePieces = [];

let selectedPiece = null;

let moves = 0;

let puzzleSeconds = 0;

let puzzleInterval = null;



function startPuzzle() {

  if (!puzzleBoard) return;

  clearInterval(puzzleInterval);

  puzzleBoard.innerHTML = "";

  puzzleWin.classList.remove("show");

  selectedPiece = null;

  moves = 0;

  puzzleSeconds = 0;

  movesElement.textContent = "0";

  puzzleTimer.textContent = "0";


  // Create pieces.

  puzzlePieces = [];

  for (
    let row = 0;
    row < GRID_SIZE;
    row++
  ) {

    for (
      let col = 0;
      col < GRID_SIZE;
      col++
    ) {

      puzzlePieces.push({
        id:
          row * GRID_SIZE + col,

        correctPosition:
          row * GRID_SIZE + col,

        currentPosition:
          row * GRID_SIZE + col
      });

    }

  }


  

  shufflePuzzle();


 

  renderPuzzle();


  

  puzzleInterval =
    setInterval(() => {

      puzzleSeconds++;

      puzzleTimer.textContent =
        puzzleSeconds;

    }, 1000);

}


function shufflePuzzle() {

  let positions =
    puzzlePieces.map(
      piece => piece.currentPosition
    );



  do {

    positions.sort(
      () => Math.random() - 0.5
    );

  } while (
    positions.every(
      (position, index) =>
        position === index
    )
  );


  puzzlePieces.forEach(
    (piece, index) => {

      piece.currentPosition =
        positions[index];

    }
  );

}


function renderPuzzle() {

  puzzleBoard.innerHTML = "";


  puzzlePieces.forEach(
    (piece) => {

      const element =
        document.createElement("div");

      element.className =
        "puzzle-piece";

      element.dataset.id =
        piece.id;


      const inner =
        document.createElement("div");

      inner.className =
        "puzzle-piece-inner";

      inner.style.backgroundImage =
        'url("/media/photos/grace-27.jpg")';

      inner.style.backgroundSize =
         "300% 300%";

      const correctRow =
        Math.floor(
          piece.id / GRID_SIZE
        );

      const correctCol =
        piece.id % GRID_SIZE;


      inner.style.backgroundPosition =
        `${correctCol * 50}% ${correctRow * 50}%`;


      element.appendChild(inner);


      const currentRow =
        Math.floor(
          piece.currentPosition /
          GRID_SIZE
        );

      const currentCol =
        piece.currentPosition %
        GRID_SIZE;


      element.style.left =
        `${currentCol * 33.3333}%`;

      element.style.top =
        `${currentRow * 33.3333}%`;


      element.addEventListener(
        "click",
        () => {

          selectPuzzlePiece(piece);

        }
      );


      puzzleBoard.appendChild(element);

    }
  );

}



function selectPuzzlePiece(piece) {

  const element =
    document.querySelector(
      `.puzzle-piece[data-id="${piece.id}"]`
    );


  if (!selectedPiece) {

    selectedPiece = piece;

    element.classList.add(
      "selected"
    );

    return;

  }


  if (
    selectedPiece.id === piece.id
  ) {

    element.classList.remove(
      "selected"
    );

    selectedPiece = null;

    return;

  }


  // Swap positions.

  const temp =
    selectedPiece.currentPosition;

  selectedPiece.currentPosition =
    piece.currentPosition;

  piece.currentPosition =
    temp;


  moves++;

  movesElement.textContent =
    moves;


  selectedPiece = null;


  renderPuzzle();


  checkPuzzleSolved();

}


function checkPuzzleSolved() {

  const solved =
    puzzlePieces.every(
      piece =>
        piece.currentPosition ===
        piece.correctPosition
    );


  if (!solved) return;


  clearInterval(
    puzzleInterval
  );


  puzzleWin.classList.add(
    "show"
  );


  createCelebration();

}



function createCelebration() {

  const celebration =
    [
      "🎉",
      "💗",
      "✨",
      "🌸",
      "🎊",
      "💕",
      "⭐"
    ];


  for (
    let i = 0;
    i < 30;
    i++
  ) {

    setTimeout(() => {

      const item =
        document.createElement("span");

      item.className =
        "floating-item";

      item.textContent =
        celebration[
          Math.floor(
            Math.random() *
            celebration.length
          )
        ];

      item.style.left =
        `${Math.random() * 100}%`;

      item.style.fontSize =
        `${20 + Math.random() * 25}px`;

      item.style.animationDuration =
        `${3 + Math.random() * 3}s`;

      floatingDecorations.appendChild(
        item
      );

      setTimeout(() => {
        item.remove();
      }, 7000);

    }, i * 80);

  }

}




const quizQuestions = [

  {
    question:
      "What was your first impression of me?",

    options: [
      "I thought you were quiet, reserved maybe a little bit mysterious",
      "I thought you were funny, playful, and charming",
      "I thought you were proud, arrogant and difficult to approach",
      "i knew immediately that we'd be close friends"
    ],

    answer: 3
  },


  {
    question:
      "What year did we first meet?",

    options: [
      "2025",
      "1997",
      "2019",
      "2020"

    ],

    answer: 2
  },


  {
    question:
      "If we were to be trapped in a room together for 2 straight days, what would we most likely do?",

    options: [
      "We'd agrue about everything and drive each other crazy",
      "We'd probably have sex",
      "We'd talk, laugh nonstop, until we are both exhausted and forget we were stuck and later fall asleep",
      "We'd shout for help and wait for someone to rescue us"
    ],

    answer: 2
  },


  {
    question:
      "Where do you see us and our relationship in the nearest future?",

    options: [
      "Fight, break up and never talk again",
      "Growing apart but still stay connected",
      "Still be best friends, closer than ever",
      "Get married and have kids, and become inseperable for life"
    ],
     
    answer: 3
  },


  {
    question:
      "Who made this little website for you?",

    options: [
      "Your teacher",
      "A random programmer",
      "Collins",
      "Google"
    ],

    answer: 2
  }

];


let currentQuestion = 0;

let quizScore = 0;


const questionText =
  document.getElementById(
    "questionText"
  );

const quizOptions =
  document.getElementById(
    "quizOptions"
  );

const questionNumber =
  document.getElementById(
    "questionNumber"
  );

const totalQuestions =
  document.getElementById(
    "totalQuestions"
  );

const quizResult =
  document.getElementById(
    "quizResult"
  );


totalQuestions.textContent =
  quizQuestions.length;


// ============================================
// START QUIZ
// ============================================

function startQuiz() {

  currentQuestion = 0;

  quizScore = 0;

  quizResult.textContent = "";

  showQuestion();

}


// ============================================
// SHOW QUESTION
// ============================================

function showQuestion() {

  const question =
    quizQuestions[
      currentQuestion
    ];


  if (!question) {

    finishQuiz();

    return;

  }


  questionNumber.textContent =
    currentQuestion + 1;


  questionText.textContent =
    question.question;


  quizOptions.innerHTML = "";


  question.options.forEach(
    (option, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "quiz-option";

      button.textContent =
        option;


      button.addEventListener(
        "click",
        () => {

          answerQuestion(
            index,
            button
          );

        }
      );


      quizOptions.appendChild(
        button
      );

    }
  );

}


// ============================================
// ANSWER QUESTION
// ============================================

function answerQuestion(
  selectedAnswer,
  button
) {

  const question =
    quizQuestions[
      currentQuestion
    ];


  const allButtons =
    document.querySelectorAll(
      ".quiz-option"
    );


  allButtons.forEach(
    btn => {
      btn.disabled = true;
    }
  );


  if (
    selectedAnswer ===
    question.answer
  ) {

    button.classList.add(
      "correct"
    );

    quizScore++;

  } else {

    button.classList.add(
      "wrong"
    );


    allButtons[
      question.answer
    ].classList.add(
      "correct"
    );

  }


  setTimeout(() => {

    currentQuestion++;

    showQuestion();

  }, 900);

}


// ============================================
// FINISH QUIZ
// ============================================

function finishQuiz() {

  questionText.textContent =
    "Quiz complete! 🎉";

  quizOptions.innerHTML = "";


  let message;


  if (quizScore === 5) {

    message =
      "Okayyyy! You actually know yourself very well 😂💗";

  } else if (quizScore >= 3) {

    message =
      "Not bad at all! You know your stuff 😌💕";

  } else {

    message =
      "Hmmmm... we need to talk 😂💗";

  }


  quizResult.innerHTML =
    `
      <strong>
        ${quizScore}/${quizQuestions.length}
      </strong>
      <br><br>
      ${message}
      <br><br>
      <button
        class="restart-game"
        onclick="startQuiz()">
        🔄 Play Again
      </button>
    `;

}


// ============================================
// ============================================
// GAME 3 — MYSTERY GIFTS
// ============================================
// ============================================

const gifts = {

  1: {
    icon: "💐",

    title:
      "A Bouquet of Happiness",

    text:
      "This gift comes with flowers, smiles and a reminder that you deserve beautiful things."
  },


  2: {
    icon: "🍫",

    title:
      "Unlimited Sweetness",

    text:
      "Because birthdays should come with something sweet... just like you. 😌💕"
  },


  3: {
    icon: "💎",

    title:
      "The Real Gift",

    text:
      "The real gift is having someone who deserves to be celebrated today. Happy Birthday, Grace! ❤️"
  }

};


function chooseGift(number) {

  const gift =
    gifts[number];


  if (!gift) return;


  const icon =
    document.getElementById(
      "giftResultIcon"
    );

  const title =
    document.getElementById(
      "giftResultTitle"
    );

  const text =
    document.getElementById(
      "giftResultText"
    );


  icon.textContent =
    gift.icon;

  title.textContent =
    gift.title;

  text.textContent =
    gift.text;


  createCelebration();

}


// ============================================
// INITIAL DECORATIONS
// ============================================

for (
  let i = 0;
  i < 10;
  i++
) {

  setTimeout(
    createFloatingDecoration,
    i * 250
  );

}