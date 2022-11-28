import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

    const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
  while (quizData.questions[quizData.currentQuestionIndex].selected === null) {

    $(document).ready(function () {
      $('li').click(function () {
        //set the color of list items default
        const liElements = document.getElementsByTagName('li');
        for (let i = 0; i < liElements.length; i++) {
          liElements[i].style.color = 'black';
          liElements[i].style.fontWeight = "normal";
        }
      });
    });

    $(document).ready(function () {
      $('li').click(function () {
        //Get the id of selected list item
        const selectedAnswer = $(this).attr('id');
        //set the styles of selected list item
        document.getElementById(selectedAnswer).style.fontWeight = "bolder";
        


        //check the answer 
        if (correctAnswer === selectedAnswer) {
          document.getElementById(selectedAnswer).style.color = "green";
        }
        else
        {document.getElementById(selectedAnswer).style.color = "red";}
          

       
        
        quizData.questions[quizData.currentQuestionIndex].selected = true;
      });
    });
    
  };
}
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
