import { createDomNode } from "../../base/base";
import { menu } from "./wrapper-menu";

const descriptionMenuWrapperInputs = {
  typeElement: "div",
  className: "wrapper-menu__wrapper-input-elements",
  parentElement: menu,
};
export const menuWrapperInputs = createDomNode(descriptionMenuWrapperInputs);

const descriptionMenuWrapperCreate = {
  typeElement: "div",
  className: "wrapper-input-elements__menu-wrapper-create",
  parentElement: menuWrapperInputs,
};
const menuWrapperCreate = createDomNode(descriptionMenuWrapperCreate);

const descriptionCreateInput = {
  typeElement: "input",
  type: "test",
  className: "menu-wrapper-create__input",
  parentElement: menuWrapperCreate,
};
const createInput = createDomNode(descriptionCreateInput);

const descriptionCreateInputColor = {
  typeElement: "input",
  type: "color",
  className: "menu-wrapper-create__input-color",
  parentElement: menuWrapperCreate,
};
const createInputColor = createDomNode(descriptionCreateInputColor);

const descriptionCreateButton = {
  typeElement: "button",
  className: "menu-wrapper-create__button",
  text: "Create",
  parentElement: menuWrapperCreate,
};
const createInputButton = createDomNode(descriptionCreateButton);

const descriptionMenuWrapperUpdate = {
  typeElement: "div",
  className: "wrapper-input-elements__menu-wrapper-update",
  parentElement: menuWrapperInputs,
};
const menuWrapperUpdate = createDomNode(descriptionMenuWrapperUpdate);

const descriptionUpdateInput = {
  typeElement: "input",
  type: "test",
  className: "menu-wrapper-update__input",
  parentElement: menuWrapperUpdate,
};
const updateInput = createDomNode(descriptionUpdateInput);

const descriptionUpdateInputColor = {
  typeElement: "input",
  type: "color",
  className: "menu-wrapper-update__input-color",
  parentElement: menuWrapperUpdate,
};
const updateInputColor = createDomNode(descriptionUpdateInputColor);

const descriptionUpdateButton = {
  typeElement: "button",
  className: "menu-wrapper-update__button",
  text: "Update",
  parentElement: menuWrapperUpdate,
};
const updateInputButton = createDomNode(descriptionUpdateButton);
