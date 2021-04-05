import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _draw() {
  let questions = ProxyState.questions;
  let template = ''
  questions.forEach(v => template += v.Template)
  document.getElementById('questions').innerHTML = template
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("questions", _draw);

    questionService.getQuestions()
  }

  getQuestion() {
    questionService.addQuestion()
  }

}
