let newScore = 0;
export function scoring() {
  let scorePerQuestion = 0;
  const score = document.createElement('p');
  score.textContent = 'Your Score is: ' + scorePerQuestion;
  score.id = 'score';
  document.body.appendChild(score);
  score.className = 'banner-correct';
}

export function newScoring() {
  newScore += 1;

  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'Your Score is: ' + newScore;
}
