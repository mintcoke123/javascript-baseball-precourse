export default class BaseballGame {
  //baseballgame 클래스 정의
  play(computerInputNumbers, userInputNumbers) {
    const totalResult = this.calculateResult(
      computerInputNumbers,
      userInputNumbers
    );
    return this.textResult(totalResult);
  }

  calculateResult(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }
    return { strike, ball };
  }

  textResult({ strike, ball }) {
    if (strike === 0 && ball == 0) {
      return "낫싱";
    } else {
      let text = "";
      if (ball > 0) {
        text += `${ball}볼 `;
      }
      if (strike > 0) {
        text += `${strike}스트라이크`;
      }
      return text.trim();
    }
  }
}
