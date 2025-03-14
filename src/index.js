import BaseballGame from "./BaseballGame.js";

const bsGame = new BaseballGame();
const userInputText = document.getElementById("user-input");
const resultText = document.getElementById("result");
const restartButton = document.getElementById("game-restart-button");
let randomNumber = randomNumberGenerator(); //랜덤넘버 생성

function randomNumberGenerator() {
  //랜덤한 숫자를 생성하는 함수
  const numbers = new Set();
  while (numbers.size < 3) {
    const randomNumber = window.MissionUtils.Random.pickNumberInRange(1, 9);
    numbers.add(randomNumber);
  }
  return [...numbers].join("");
}

function showResult() {
  //결과를 출력하는 함수
  const userInput = userInputText.value;
  let result = "";
  if (!isValidInput(userInput)) {
    alert("잘못된 입력입니다.");
    return;
  }

  const gameResult = bsGame.play(randomNumber, userInput);
  if (gameResult.includes("3스트라이크")) {
    toggleRestartButton(true);
    resultText.innerHTML =
      "<strong>정답을 맞추셨습니다!</strong><p><br>게임을 다시 시작하시겠습니까?</p>";
  } else {
    resultText.textContent = gameResult;
  }
}

function isValidInput(input) {
  return input.length === 3 && isNumber(input);
}

function isNumber(input) {
  return [...input].every((element) => element >= "1" && element <= "9");
}

function toggleRestartButton(isOn) {
  restartButton.style.display = isOn ? "block" : "none";
}

function onClickSubmit() {
  showResult();
}

function onClickRestart() {
  userInputText.value = "";
  randomNumber = randomNumberGenerator();
  resultText.innerHTML = "";
  toggleRestartButton(false);
}

window.onClickSubmit = onClickSubmit; //전역객체
window.onClickRestart = onClickRestart; //전역객체

toggleRestartButton(false);
