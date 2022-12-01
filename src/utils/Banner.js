///>>> Creating a Correct Answer Banner
import { USER_INTERFACE_ID } from '../constants.js';
const userInterface = document.getElementById(USER_INTERFACE_ID);

export function correctBanner() {
  const correctAnswerBanner = document.createElement('p');
  correctAnswerBanner.textContent = 'Correct Answer';
  correctAnswerBanner.style.display = 'block';
  correctAnswerBanner.className = 'banner-correct'; // TO STYLE IT LATER
  // document.body.appendChild(correctAnswerBanner); // AT THE TOP OF THE PAGE
  userInterface.appendChild(correctAnswerBanner);
} // AT THE BOTTOM  OF THE PAGE

///>>> Creating a Correct Answer Banner
export function wrongBanner() {
  const wrongAnswerBanner = document.createElement('p');
  wrongAnswerBanner.textContent = 'Wrong Answer';
  wrongAnswerBanner.style.display = 'block';
  wrongAnswerBanner.className = 'banner-wrong'; // TO STYLE IT LATER
  // document.body.appendChild(correctAnswerBanner); // AT THE TOP OF THE PAGE
  userInterface.appendChild(wrongAnswerBanner); // AT THE BOTTOM  OF THE PAGE
}
