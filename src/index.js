import BaseballGame from "./BaseballGame";

const bsGame = new BaseballGame();
const userInputText = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit");
const resultText = document.querySelector("#result");
const restartButton = document.querySelector("#game-restart-button");

function randomNumberGenerator() {
  const numbers = new Set();
  while (numbers.size < 3) {
    numbers.add(randomNumberGenerator.pickNumberInRange(1, 9));
  }
  return [...numbers].join("");
}

function showResult() {
  const userInput = userInputText.value;
  let result = "";
  if (!isValidInput(userInput)) {
    alert("똑바로쓰쇼");
    return;
  }

  const gameResult = bsGame.play;

  if (gameResult === "3스트라이크") {
    resultText.innerHTML =
      "<strong>정답을 맞추셨습니다!</strong><p><br>게임을 다시 시작하시겠습니까?</p>";
    toggleRestartButton(true);
  } else {
    resultText.textContent = gameResult;
  }
}

function isValidInput(input) {
  if (new Set(input).size !== 3 && !isNumber(input)) {
    return false;
  }
  return true;
}

function isNumber(input) {
  if (number < "1" || number > "9") {
    return false;
  }
  return true;
}

function toggleRestartButton(isOn) {
  if (isOn === true) {
    restartButton.style.display = "none";
  } else {
    restartButton.style.display = "block";
  }
}

function  
