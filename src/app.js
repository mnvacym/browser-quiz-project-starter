import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  if (quizData.currentQuestionIndex !== 0) {
    quizData.currentQuestionIndex++;
    initQuestionPage();
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
