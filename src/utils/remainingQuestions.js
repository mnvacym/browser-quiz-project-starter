import { quizData } from '../data.js';

let remainingQuestions = quizData.questions.length;
export function settingRemainingQuestion() {
  const questions = document.createElement('p');
  questions.textContent = 'Remaining Questions : ' + remainingQuestions;
  questions.id = 'remaining-questions';
  document.body.appendChild(questions);
  questions.className = 'banner-correct'; /// NEED TO FIX STYLING AS IT
}

export function countingRemainingQuestions() {
  remainingQuestions =
    quizData.questions.length - quizData.currentQuestionIndex;
  const UpdateRemainingQuestions = document.getElementById(
    'remaining-questions'
  );
  UpdateRemainingQuestions.innerHTML =
    'Remaining Questions : ' + remainingQuestions;
}
