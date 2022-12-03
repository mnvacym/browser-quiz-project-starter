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
import {
  settingRemainingQuestion,
  countingRemainingQuestions,
} from '../utils/remainingQuestions.js';

scoring();
settingRemainingQuestion();

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

  countingRemainingQuestions();

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => nextQuestionCheck(nextQuestion));
};

const nextQuestion = () => {
  //>>>LAST PAGE >>>
  if (quizData.currentQuestionIndex < 9) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    setQuizData(quizData);
    initQuestionPage();
  } else {
    lastPage();
  }

  //>>>LAST PAGE >>>
};

function lastPage() {
  document.body.innerHTML = '';

  // console.log(getQuizData());
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let skippedAnswers = 0;
  for (let finalQuestions of getQuizData().questions) {
    // console.log(finalQuestions.text);
    // console.log(finalQuestions.correct);
    // console.log(finalQuestions.selected);
    if (finalQuestions.correct === finalQuestions.selected) {
      console.log(finalQuestions.text);

      let correctAnswerReference = finalQuestions.correct;
      console.log(correctAnswerReference);

      console.log(finalQuestions.answers.correctAnswerReference);

      correctAnswers += 1;
    }
    if (
      finalQuestions.correct !== finalQuestions.selected &&
      finalQuestions.selected != 0
    ) {
      wrongAnswers += 1;
    }
    if (finalQuestions.selected == 0) {
      skippedAnswers += 1;
    }
  }

  const thankYou = document.createElement('p');
  thankYou.textContent =
    'Thank you for taking the time to complete this quiz. Here is a Summary: ';
  document.body.appendChild(thankYou);
  thankYou.id = 'score';

  const addCorrectAnswer = document.createElement('p');
  addCorrectAnswer.textContent = 'Correct Answers = ' + correctAnswers;
  document.body.appendChild(addCorrectAnswer);
  addCorrectAnswer.id = 'score'; //  Style to be adjusted

  const addWrongAnswer = document.createElement('p');
  addWrongAnswer.textContent = 'Wrong Answers = ' + wrongAnswers;
  document.body.appendChild(addWrongAnswer);
  addWrongAnswer.id = 'score'; //  Style to be adjusted

  const addSkippedAnswer = document.createElement('p');
  addSkippedAnswer.textContent = 'Skipped Answers = ' + skippedAnswers;
  document.body.appendChild(addSkippedAnswer);
  addSkippedAnswer.id = 'score'; //  Style to be adjusted
}
