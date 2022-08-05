import { createDomNode } from '../../base/base';
import { menuWrapperInputs } from './create-update';

const descriptionMenuWrapperButtonsRasResGen = {
  typeElement: 'div',
  className: 'wrapper-input-elements__wrapper-buttons',
  parentElement: menuWrapperInputs,
};
const menuWrapperButtonsRasResGen = createDomNode(
  descriptionMenuWrapperButtonsRasResGen,
);

const descriptionRaceButton = {
  typeElement: 'button',
  className: 'wrapper-buttons__button-race',
  text: 'Race',
  parentElement: menuWrapperButtonsRasResGen,
};
const buttonRace = createDomNode(descriptionRaceButton);

const descriptionRessetButton = {
  typeElement: 'button',
  className: 'wrapper-buttons__button-resset',
  text: 'Resset',
  parentElement: menuWrapperButtonsRasResGen,
};
const buttonResset = createDomNode(descriptionRessetButton);

const descriptionGenerateCarsButton = {
  typeElement: 'button',
  className: 'wrapper-buttons__button-generate-cars',
  text: 'Generate cars',
  parentElement: menuWrapperButtonsRasResGen,
};
const buttonGenerateCars = createDomNode(descriptionGenerateCarsButton);
