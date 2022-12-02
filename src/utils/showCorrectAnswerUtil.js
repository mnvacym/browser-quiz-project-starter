import { appendLinks } from './appendLinksUtil.js';
import { newScoring } from '../utils/scoring.js';
import { correctBanner } from '../utils/Banner.js';
import { wrongBanner } from '../utils/Banner.js';

export const showCorrectAnswer = (answerElement, key, currentQuestion) => {
  //check if answer is not given before
  if (currentQuestion.selected === null) {
    if (currentQuestion.correct === key) {
      answerElement.className = 'correct';
      currentQuestion.selected = key;
      correctBanner();
      newScoring();
    } else {
      answerElement.className = 'wrong';
      currentQuestion.selected = key;
      wrongBanner();

      const liElements = document.getElementsByTagName('li');
      for (const element of liElements) {
        if (element.id == currentQuestion.correct) {
          element.className = 'correct';
        }
      }
    }
    appendLinks(currentQuestion);
    const btn = document.getElementById('next-question-button');
    btn.textContent = 'Next question';
  }
};
