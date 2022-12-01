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
import { newScoring } from '../utils/scoring.js';
import { correctBanner } from '../utils/Banner.js';
import { wrongBanner } from '../utils/Banner.js';
import { showCorrectAnswer } from '../utils/showCorrectAnswerUtil.js';

scoring();

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

    // function showAnswer() {
    //   if (currentQuestion.selected !== true) {
    //     currentQuestion.selected = true;
    //     if (currentQuestion.correct === key) {
    //       answerElement.className = 'correct';
    //       correctBanner();
    //       newScoring();
    //     } else {
    //       answerElement.className = 'wrong';
    //       wrongBanner();

    //       //get all li elements
    //       const liElements = document.getElementsByTagName('li');
    //       for (const element of liElements) {
    //         // check which one is correct answer
    //         if (element.id == currentQuestion.correct) {
    //           // show the correct answer
    //           element.className = 'correct';
    //         }
    //       }
    //     }
    //     appendLinks(currentQuestion);
    //   }
    // }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
