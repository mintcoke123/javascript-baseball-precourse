export default class Model {
  constructor() {
    this.computerInputNumbers = '';
    this.userInputNumbers = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() { // 타당한 입력이 아니면 경고를 출력하고, 아니면 string으로 결괏값을 반환하는 함수
    this.calculateStrikeBall(this.computerInputNumbers, this.userInputNumbers);
    return this.generateStrikeBallMessage();
  }

  calculateStrikeBall() { // 두 숫자에서 strike, ball을 도출하는 함수
    this.ball = 0;
    this.strike = 0;

    for (let index = 0; index < 3; index += 1) {
      if (this.computerInputNumbers[index] === this.userInputNumbers[index]) this.strike += 1;
      else if (this.computerInputNumbers.includes(this.userInputNumbers[index])) this.ball += 1;
    }
  }

  generateStrikeBallMessage() { // strike, ball number 를 전하는 message를 생성
    if (this.strike === 0 && this.ball === 0) return '낫싱';
    if (this.strike === 0) return `${this.ball}볼`;
    if (this.ball === 0) return `${this.strike}스트라이크`;
    return `${this.ball}볼 ${this.strike}스트라이크`;
  }

  randomNumberGenerator() { // 시작 시 렌덤한 수를 만드는 함수
    const numbers = new Set();
    while (numbers.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }
    this.computerInputNumbers = [...numbers].join('');
  }

  userInput(input) {
    this.userInputNumbers = input;
  }

  isValidInput() { // 타당한 입력인지 확인하는 함수
    return this.isNumber() && this.isDifferent() && this.isThree();
  }

  isNumber() { // 세 char가 숫자이면 true를, 아니면 false를 return 하는 함수
    return [...this.userInputNumbers].every((element) => element >= '1' && element <= '9');
  }

  isDifferent() { // 세 숫자가 서로 다른 숫자임을 확인하는 함수
    const uniqueNumber = [...new Set(this.userInputNumbers)];
    return uniqueNumber.length === 3;
  }

  isThree() { // 숫자가 세자리임을 확인하는 함수
    return this.userInputNumbers.length === 3;
  }
}
