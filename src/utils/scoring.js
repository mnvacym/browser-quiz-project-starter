import { quizData } from '../data.js';

export function scoring() {
  const score = document.createElement('p');
  score.textContent = 'Your score: ' + quizData.currentScore;
  score.id = 'score';
  document.body.appendChild(score);
}

export function newScoring() {
  quizData.currentScore = quizData.currentScore + 1;

  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'Your score: ' + quizData.currentScore;
}
