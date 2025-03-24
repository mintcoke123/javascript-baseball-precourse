import BaseballGameController from '../controller/controller.js';
import BaseballGameView from '../view/view.js';
import BaseballGameModel from '../model/model.js';

document.addEventListener('DOMContentLoaded', () => {
  new BaseballGameController(new BaseballGameView(), new BaseballGameModel()).gameStart();
});
