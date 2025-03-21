import Controller from "../controller/controller.js";
import View from "../view/view.js";
import Model from "../model/model.js";

document.addEventListener('DOMContentLoaded', () => {
  new Controller(new View(),new Model()).gameStart();
});