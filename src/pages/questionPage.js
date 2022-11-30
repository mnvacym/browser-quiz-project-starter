import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { showCorrectAnswer } from '../utils/showCorrectAnswerUtil.js';

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
    answerElement.addEventListener('click', () => {
      showCorrectAnswer(answerElement, key, currentQuestion);
    });
  }

  // Creating a Correct Answer Banner
  const correctAnswerBanner = document.createElement('p');
  correctAnswerBanner.textContent = 'Correct Answer';
  correctAnswerBanner.style.display = 'none';
  correctAnswerBanner.className = 'banner-correct';
  // document.body.appendChild(correctAnswerBanner); // AT THE TOP OF THE PAGE
  userInterface.appendChild(correctAnswerBanner); // AT THE BOTTOM  OF THE PAGE

  // Creating a Correct Answer Banner
  const wrongAnswerBanner = document.createElement('p');
  wrongAnswerBanner.textContent = 'Wrong Answer';
  wrongAnswerBanner.style.display = 'none';
  wrongAnswerBanner.className = 'banner-wrong';

  // document.body.appendChild(correctAnswerBanner); // AT THE TOP OF THE PAGE
  userInterface.appendChild(wrongAnswerBanner); // AT THE BOTTOM  OF THE PAGE

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
