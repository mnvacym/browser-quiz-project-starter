let remainingQuestions = 10;
function showingRemainingQuestions() {
  const questions = document.createElement('p');
  questions.textContent = 'Remaining Questions : ' + remainingQuestions;

  questions.id = 'remaining-questions';
  document.body.appendChild(questions);
}

function reducingRemainingQuestions() {
  newScore += 1;

  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'Your Score is: ' + newScore;
}
