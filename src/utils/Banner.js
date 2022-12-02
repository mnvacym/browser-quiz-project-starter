///>>> Creating a Correct Answer Banner
import { USER_INTERFACE_ID } from '../constants.js';
const userInterface = document.getElementById(USER_INTERFACE_ID);

export function correctBanner() {
  const correctAnswerBanner = document.createElement('p');
  correctAnswerBanner.textContent = 'Correct Answer';
  correctAnswerBanner.className = 'banner-correct'; // TO STYLE IT LATER
  userInterface.appendChild(correctAnswerBanner);
}

export function wrongBanner() {
  const wrongAnswerBanner = document.createElement('p');
  wrongAnswerBanner.textContent = 'Wrong Answer';
  wrongAnswerBanner.className = 'banner-wrong'; // TO STYLE IT LATER
  userInterface.appendChild(wrongAnswerBanner); // AT THE BOTTOM  OF THE PAGE
}
