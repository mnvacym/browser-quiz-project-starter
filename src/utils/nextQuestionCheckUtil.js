import { nextQuestion } from '../pages/questionPage.js';
import { createAnswerElement } from '../views/answerView.js';
import { showCorrectAnswer } from '../utils/showCorrectAnswerUtil.js';
import { quizData } from '../data.js';

export const nextQuestionCheck = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const links = document.getElementById('links-div').childNodes.length;
  if (links === 0) {
    for (const [key, answerText] of Object.entries(currentQuestion.correct)) {
      const answerElement = createAnswerElement(key, answerText);
      showCorrectAnswer(answerElement, key, currentQuestion);
    }
  } else {
    nextQuestion();
  }
};
