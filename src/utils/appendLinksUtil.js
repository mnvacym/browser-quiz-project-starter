import { LINKS_DIV } from '../constants.js';
import { createLinkElement } from '../views/linkView.js';

export const appendLinks = (currentQuestion) => {
  currentQuestion.links.forEach((link) => {
    const answerLink = document.getElementById(LINKS_DIV);
    return answerLink.appendChild(createLinkElement(link.href, link.text));
  });
};
