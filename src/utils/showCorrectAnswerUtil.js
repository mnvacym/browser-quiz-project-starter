import { appendLinks } from './appendLinksUtil.js';
import { newScoring } from '../utils/scoring.js';
import { correctBanner } from '../utils/Banner.js';
import { wrongBanner } from '../utils/Banner.js';

export const showCorrectAnswer = (answerElement, key, currentQuestion) => {
  if (currentQuestion.selected !== true) {
    currentQuestion.selected = true;
    if (currentQuestion.correct === key) {
      answerElement.className = 'correct';
      correctBanner();
      newScoring();
    } else {
      answerElement.className = 'wrong';
      wrongBanner();

      const liElements = document.getElementsByTagName('li');
      for (const element of liElements) {
        if (element.id == currentQuestion.correct) {
          element.className = 'correct';
        }
      }
    }
    appendLinks(currentQuestion);
  }
};
