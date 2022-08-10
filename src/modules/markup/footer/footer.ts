import { body, createDomNode } from '../base/base';

const descriptionFooter = {
  typeElement: 'footer',
  className: 'footer',
};
const footer = createDomNode(descriptionFooter);
body.append(footer);

const descriptionButtonsWrapper = {
  typeElement: 'div',
  className: 'wrapper-buttons',
  parentElement: footer,
};
const buttonsWrapper = createDomNode(descriptionButtonsWrapper);

const descriptionButtonPrev = {
  typeElement: 'button',
  className: 'wrapper-buttons__button-prev',
  text: 'Prev page',
  parentElement: buttonsWrapper,
};
const buttonPrev = createDomNode(descriptionButtonPrev);

const descriptionButtonNext = {
  typeElement: 'button',
  className: 'wrapper-buttons__button-next',
  text: 'Next page',
  parentElement: buttonsWrapper,
};
const buttonNext = createDomNode(descriptionButtonNext);
