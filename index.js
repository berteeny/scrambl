import { words } from "./assets/words.js";

const randomNum = Math.floor(Math.random() * words.length);
const randomWord = words[randomNum];
const letters = randomWord.split("");
// Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
const shuffledLetters = shuffleArray(letters);
const finalWord = shuffledLetters.join().replace(/\,/g, "").toLowerCase();

document.getElementById("scrambledWord").innerHTML = finalWord;


document.addEventListener("keydown", function (event) {
  if (overlay.classList.contains("on")) {
    if (event.key === "Enter") {
      popupIncorrect.classList.remove("open-popup");
      overlay.classList.remove("on");
      document.getElementById("userWord").value = "";
    }
  } else {
    keyAnimation(event.key);
    onScreenType(event.key);
  }
});

const numOfButtons = document.querySelectorAll(".btn").length;
for (let i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    const pressedButton = this.id;
    keyAnimation(pressedButton);
    onScreenType(pressedButton);
  });
}

function keyAnimation(currentKey) {
  const pressedKey = document.querySelector("#" + currentKey);
  pressedKey.classList.add("keyPressed");

  setTimeout(function () {
    pressedKey.classList.remove("keyPressed");
  }, 100);
}

function onScreenType(currentKey) {
  if (
    currentKey !== "Backspace" &&
    currentKey !== "Enter" &&
    document.getElementById("userWord").value.length < 7
  ) {
    document.getElementById("userWord").value += currentKey;
  } else if (currentKey === "Backspace") {
    const word = document.getElementById("userWord").value;
    document.getElementById("userWord").value = word.slice(0, word.length - 1);
  } else if (currentKey === "Enter") {
    if (
      document.getElementById("userWord").value.toLowerCase() ===
      randomWord.toLowerCase()
    ) {
      correctPopup();
      refreshOnE();
    } else if (
      document.getElementById("userWord").value.toLowerCase() !==
      randomWord.toLowerCase()
    ) {
      incorrectPopup();
    }
  }
}

console.log(randomWord);

const overlay = document.getElementById("overlay");

const popupCorrect = document.getElementById("correct");

const popupIncorrect = document.getElementById("incorrect");

function correctPopup() {
  popupCorrect.classList.add("open-popup");
  overlay.classList.add("on");
}

function incorrectPopup() {
  popupIncorrect.classList.add("open-popup");
  overlay.classList.add("on");
}

const closeButton = document.getElementById("closeIncorrect");

const refreshButton = document.getElementById("closeCorrect");

closeButton.addEventListener("click", function () {
  popupIncorrect.classList.remove("open-popup");
  overlay.classList.remove("on");
  document.getElementById("userWord").value = "";
});

refreshButton.addEventListener("click", function () {
  window.location.reload();
});

function refreshOnE() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      window.location.reload();
    }
  });
}

//NEXT: VV

//put a green line around popup -> may require multiple divs - .borderGrn
