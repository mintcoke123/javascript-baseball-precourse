export default class Controller{
  constructor(view, model){
    this.view = view;
    this.model = model;
  }

  restart(){
    this.view.gameOverHide();
    this.model.randomNumberGenerator();
  }

  gameStart(){
    this.initEventListeners();
    this.view.gameOverHide();
    this.model.randomNumberGenerator();
  }

  userSubmit(){
    this.model.userInput(this.view.userInputText.value);
    if(!this.model.isValidInput()){
      return this.view.alertMessage();
    }
    const gameResult = this.model.play();
    if(gameResult=="3스트라이크"){
      return this.view.gameOverShow();
    }
    return this.view.showGameResult(gameResult);
  }

  initEventListeners(){ // 초기 로드 시 이벤트 바인딩
    this.view.submitButton.addEventListener("click",() =>{
      this.userSubmit();
    })
    document.addEventListener("keydown",(event) => {
      if(event.key=="Enter"){
        this.userSubmit();
        event.preventDefault();
      }
    })
    this.view.restartButton.addEventListener("click",()=>{
      this.restart();
    })
  } 
}