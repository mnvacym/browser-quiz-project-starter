import { quizData } from '../data.js';

let remainingQuestions = quizData.questions.length;
export function settingRemainingQuestion() {
  const questions = document.createElement('p');
  questions.textContent = 'Remaining questions : ' + remainingQuestions;
  questions.id = 'remaining-questions';
  document.body.appendChild(questions);
}

export function countingRemainingQuestions() {
  remainingQuestions =
    quizData.questions.length - quizData.currentQuestionIndex;
  const UpdateRemainingQuestions = document.getElementById(
    'remaining-questions'
  );
  UpdateRemainingQuestions.innerHTML =
    'Remaining questions : ' + remainingQuestions;
}
