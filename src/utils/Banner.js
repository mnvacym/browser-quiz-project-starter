///>>> Creating a Correct Answer Banner
import { USER_INTERFACE_ID } from '../constants.js';
const userInterface = document.getElementById(USER_INTERFACE_ID);

export function correctBanner() {
  const correctAnswerBanner = document.createElement('p');
  correctAnswerBanner.textContent = 'Correct answer';
  correctAnswerBanner.className = 'banner-correct';
  userInterface.prepend(correctAnswerBanner);
}

export function wrongBanner() {
  const wrongAnswerBanner = document.createElement('p');
  wrongAnswerBanner.textContent = 'Wrong answer';
  wrongAnswerBanner.className = 'banner-wrong';
  userInterface.prepend(wrongAnswerBanner); // AT THE TOP OF THE PAGE
}
