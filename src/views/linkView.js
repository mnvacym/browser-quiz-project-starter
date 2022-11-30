/**
 * Create an Link element
 * @returns {Element}
 */
export const createLinkElement = (href, label) => {
  const element = document.createElement('div');
  const elementA = document.createElement('a');
  elementA.innerHTML = label;
  elementA.href = href;
  elementA.target = '_blank';
  element.appendChild(elementA);
  return element;
};
