import { createDomNode } from '../../base/base';
import menu from './wrapper-menu';

const descriptionMenuGarageWinners = {
  typeElement: 'div',
  className: 'wrapper-menu__wrapper-buttons-garage-winners',
  parentElement: menu,
};
const MenuGarageWinners = createDomNode(descriptionMenuGarageWinners);

const descriptionInputGarage = {
  typeElement: 'button',
  className: 'wrapper-buttons-garage-winners__button-garage',
  text: 'Garage',
  parentElement: MenuGarageWinners,
};
const inputGarage = createDomNode(descriptionInputGarage);

const descriptionInputUpdate = {
  typeElement: 'button',
  className: 'wrapper-buttons-garage-winners__button-winners',
  text: 'Winners',
  parentElement: MenuGarageWinners,
};
const inputUpdate = createDomNode(descriptionInputUpdate);

export default descriptionMenuGarageWinners;
