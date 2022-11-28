import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', showAnswer);
    function showAnswer() {
      if (currentQuestion.correct === key) {
        // 1. if the answer is Correct, the answer will turn Green
        answerElement.style.color = 'green'; //>>> To be replaced with Css Styling when ready // answerElement.className = '.correct'
        // 2. Showing a "Correct Answer" Banner
        // (a.Create and style the 'Correct Answer Banner' | b.create Two class name in Css: one that hides it and another one that shows it)
        // 3. Showing the documentation links (links are hidden and they will be revealed)
      } else {
        // 1. if the answer is Wrong, the answer will turn Red
        answerElement.style.color = 'red'; //>>> To be replaced with Css Styling when ready // answerElement.className = '.wrong'
        // 2. Showing a "Wrong Answer" Div
        // (a.Create and style the 'Wrong Answer Banner' | b.create Two class name in Css: one that hides it and another one that shows it)
        // 3. Highlighting the Correct Answer
        // 3. Showing the documentation links (links are hidden and they will be revealed)
      }

      // >> Outputting General information
      // console.log(answerElement);
      // console.log(key);
      // console.log(answerText);
      // console.log(currentQuestion.correct);
      // console.log(key);
    }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
