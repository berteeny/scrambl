import { words } from "./assets/words.js";

var randomNum = Math.floor(Math.random() * words.length);
var randomWord = words[randomNum];
var letters = randomWord.split("");
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
var shuffledLetters = shuffleArray(letters);
var finalWord = shuffledLetters.join().replace(/\,/g, "").toLowerCase(); // this now works go from here
console.log(finalWord);

// input into scrambledWord div

document.addEventListener("keydown", function (event) {
  keyAnimation(event.key);
  onScreenType(event.key);
});

function keyAnimation(currentKey) {
  var pressedKey = document.querySelector("#" + currentKey);
  pressedKey.classList.add("keyPressed");

  setTimeout(function () {
    pressedKey.classList.remove("keyPressed");
  }, 100);
}

var numOfButtons = document.querySelectorAll(".btn").length;
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var pressedButton = this.id;
    keyAnimation(pressedButton);
    onScreenType(pressedButton);
  });
}

function onScreenType(currentKey) {
  if (
    currentKey !== "Backspace" &&
    currentKey !== "Enter" &&
    document.getElementById("focusUserWord").value.length < 7
  ) {
    document.getElementById("focusUserWord").value += currentKey;
  } else if (currentKey === "Backspace") {
    var word = document.getElementById("focusUserWord").value;
    document.getElementById("focusUserWord").value = word.slice(
      0,
      word.length - 1
    );
  } else if (currentKey === "Enter") {
    // this is untested, test this!!
    if ((document.getElementById("focusUserWord").value = randomWord)) {
      alert("nice");
    } else {
      alert("nah");
    }
  }
}
