import { createDomNode, IDomNode } from '../../base/base';
import { header } from '../header';

const descriptionMenu: IDomNode = {
  typeElement: 'div',
  className: 'wrapper-menu',
  parentElement: header,
};
const menu = createDomNode(descriptionMenu);

export default menu;
