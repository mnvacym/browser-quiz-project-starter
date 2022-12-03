import { getQuizData } from '../utils/sessionStorage.js';

export function lastPage() {
  document.body.innerHTML = '';
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let skippedAnswers = 0;
  for (let finalQuestions of getQuizData().questions) {
    if (finalQuestions.correct === finalQuestions.selected) {
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
  thankYou.id = 'score'; //  Style to be adjusted

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

  ///>>> RESTART BUTTON

  const restartButton = createRestartButton();
  document.body.appendChild(restartButton);
  restartButton.id = 'restart-button';

  document
    .getElementById('restart-button')
    .addEventListener('click', restartQuiz);

  ///<<<
}

const createRestartButton = () => {
  const element = document.createElement('div');
  element.innerHTML = '<button>Restart quiz</button>';
  return element;
};

const restartQuiz = () => {
  sessionStorage.clear();
  location.reload();
};
