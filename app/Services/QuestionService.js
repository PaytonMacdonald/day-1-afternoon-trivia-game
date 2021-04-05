import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionService {
  // functions go here

  async getQuestions() {
    let res = await api.get()
    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }


}

export const questionService = new QuestionService();

