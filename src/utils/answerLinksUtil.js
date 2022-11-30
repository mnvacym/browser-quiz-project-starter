import { LINKS_DIV } from '../constants.js';
import { createLinkElement } from '../views/linkView.js';

export const answerLinks = (currentQuestion) => {
  currentQuestion.links.forEach((link) => {
    const answerLink = document.getElementById(LINKS_DIV);
    return answerLink.appendChild(createLinkElement(link.href, link.text));
  });
};
