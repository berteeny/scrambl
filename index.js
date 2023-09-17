import { words } from "./assets/words.js";

var randomNum = Math.floor(Math.random * words.length);
var randomWord = words[randomNum];
console.log(randomWord);

document.addEventListener("keydown", function (event) {
  keyAnimation(event.key);
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
  });
}
