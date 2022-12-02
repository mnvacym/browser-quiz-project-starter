import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { appendLinks } from '../utils/appendLinksUtil.js';
import { scoring } from '../utils/scoring.js';
import { showCorrectAnswer } from '../utils/showCorrectAnswerUtil.js';
import { nextQuestionCheck } from '../utils/nextQuestionCheckUtil.js';

scoring();

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  if (currentQuestion.selected === true) {
    document.querySelector('h1').style.color = 'green';
  } else if (currentQuestion.selected === false) {
    document.querySelector('h1').style.color = 'red';
  }

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', () => {
      if (currentQuestion.selected === true) {
        alert(
          'You already answered this question! ANSWER WAS CORRECT. Please answer the next question.'
        );
      } else if (currentQuestion.selected === false) {
        alert(
          'You already answered this question! ANSWER WAS WRONG. Please answer the next question.'
        );
      }
      showCorrectAnswer(answerElement, key, currentQuestion);
      sessionStorage.setItem('quizDataSaved', JSON.stringify(quizData));
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => nextQuestionCheck(nextQuestion));
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};
