import { quizData } from '../data.js';

let remainingQuestions = 10;
export function settingRemainingQuestion() {
  const questions = document.createElement('p');
  questions.textContent = 'Remaining Questions : ' + remainingQuestions;
  questions.id = 'remaining-questions';
  document.body.appendChild(questions);
  questions.className = 'banner-correct'; /// NEED TO FIX STYLING AS IT FITS
}

export function countingRemainingQuestions() {
  remainingQuestions = 10 - quizData.currentQuestionIndex;
  const UpdateRemainingQuestions = document.getElementById(
    'remaining-questions'
  );
  UpdateRemainingQuestions.innerHTML =
    'Remaining Questions : ' + remainingQuestions;
}
