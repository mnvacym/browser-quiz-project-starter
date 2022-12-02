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
import { setQuizData, getQuizData } from '../utils/sessionStorage.js';
import { nextQuestionCheck } from '../utils/nextQuestionCheckUtil.js';

scoring();

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  if (!!getQuizData() && !!currentQuestion.selected) {
    appendLinks(currentQuestion);
    const btn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
    btn.textContent = 'Next question';
  }
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    if (!!getQuizData() && !!currentQuestion.selected) {
      if (
        key === currentQuestion.selected &&
        currentQuestion.selected === currentQuestion.correct
      ) {
        answerElement.className = 'correct';
      }
      if (
        key === currentQuestion.selected &&
        currentQuestion.selected !== currentQuestion.correct
      ) {
        answerElement.className = 'wrong';
      }
      if (key === currentQuestion.correct) {
        answerElement.className = 'correct';
      }
    }
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', () => {
      showCorrectAnswer(answerElement, key, currentQuestion);
      setQuizData(quizData);
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => nextQuestionCheck(nextQuestion));
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  setQuizData(quizData);
  initQuestionPage();
};
