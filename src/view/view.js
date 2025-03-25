export default class BaseballGameView {
  constructor() {
    this.userInputText = document.getElementById("user-input");
    this.resultText = document.getElementById("result");
    this.restartButton = document.getElementById("game-restart-button");
    this.submitButton = document.getElementById("submit");
  }

  restartButtonShow = () => {
    this.restartButton.style.display = "block";
  };

  restartButtonHide = () => {
    this.restartButton.style.display = "none";
  };

  showGameResult = (gameResult) => {
    this.resultText.textContent = gameResult;
  };

  correctMessageShow = () => {
    this.resultText.innerHTML =
      "<strong>정답을 맞추셨습니다!</strong><p><br>게임을 다시 시작하시겠습니까?</p>";
  };

  correctMessageHide = () => {
    this.resultText.innerHTML = "";
  };

  alertMessage = () => {
    alert("잘못된 입력입니다.");
    this.resultText.innerHTML = "<strong>잘못된 입력입니다</strong>";
  };

  gameOverHide = () => {
    this.userInputText.value = "";
    this.correctMessageHide();
    this.restartButtonHide();
  };

  gameOverShow = () => {
    this.correctMessageShow();
    this.restartButtonShow();
    this.disableSubmitButton();
  };

  enableSubmitButton = () => {
    this.submitButton.disabled = false;
  };

  disableSubmitButton = () => {
    this.submitButton.disabled = true;
  };
}
