import { appendLinks } from './appendLinksUtil.js';

export const showCorrectAnswer = (answerElement, key, currentQuestion) => {
  //check if answer is not given before
  if (currentQuestion.selected !== true) {
    currentQuestion.selected = true;
    if (currentQuestion.correct === key) {
      // 1. if the answer is Correct, the answer will turn Green
      answerElement.className = 'correct';
    } else {
      // 1. if the answer is Wrong, the answer will turn Red
      answerElement.className = 'wrong';

      //get all li elements
      const liElements = document.getElementsByTagName('li');
      for (const element of liElements) {
        // check which one is correct answer
        if (element.id == currentQuestion.correct) {
          // show the correct answer
          element.className = 'correct';
        }
      }
    }
    appendLinks(currentQuestion);
    const btn = document.getElementById('next-question-button');
    btn.textContent = 'Next question';
  }
};
