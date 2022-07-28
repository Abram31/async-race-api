import { createDomNode } from "../base/base";

const body = document.querySelector("body") as HTMLElement;

const descriptionMain = {
  typeElement: "main",
  className: "main",
  parentElement: body,
};
const main = createDomNode(descriptionMain);

const descriptionH3 = {
  typeElement: "h3",
  className: "title-garage",
  text: "Garage",
  parentElement: main,
};
const h3 = createDomNode(descriptionH3);

const descriptionH4 = {
  typeElement: "h4",
  className: "title-page",
  text: "Page # 1",
  parentElement: main,
};
const h4 = createDomNode(descriptionH4);

const descriptionWrapperCars = {
  typeElement: "div",
  className: "wrapper-cars",
  parentElement: main,
};
const wrapperCars = createDomNode(descriptionWrapperCars);

// -----------------------------------CAR ----------------------

const descriptionConteinerCar = {
  typeElement: "section",
  className: "wrapper-cars__car-container",
  parentElement: wrapperCars,
};
const conteinerCars = createDomNode(descriptionConteinerCar);

const descriptionConteinerButtons = {
  typeElement: "div",
  className: "car-container__wrapper-buttons-select-remove",
  parentElement: conteinerCars,
};
const conteinerButtons = createDomNode(descriptionConteinerButtons);

const descriptionButtonSelect = {
  id: "1",
  typeElement: "button",
  text: "Select",
  className: "wrapper-buttons-select-remove__select",
  parentElement: conteinerButtons,
};
const buttonSelect = createDomNode(descriptionButtonSelect);

const descriptionButtonRemove = {
  id: "1",
  typeElement: "button",
  text: "Remove",
  className: "wrapper-buttons-select-remove__remove",
  parentElement: conteinerButtons,
};
const buttonRemove = createDomNode(descriptionButtonRemove);

const descriptionButtonsh4 = {
  typeElement: "span",
  text: "Tesla",
  className: "wrapper-buttons-select-remove__h4",
  parentElement: conteinerButtons,
};
const buttonsH4 = createDomNode(descriptionButtonsh4);

const descriptionConteinerStartBack = {
  typeElement: "div",
  className: "car-container__wrapper-start-back",
  parentElement: conteinerCars,
};
const conteinerStartBack = createDomNode(descriptionConteinerStartBack);

const descriptionStart = {
  id: "1",
  typeElement: "button",
  text: "Start",
  className: "wrapper-start-back__button-start",
  parentElement: conteinerStartBack,
};
const buttonStart = createDomNode(descriptionStart);

const descriptionBack = {
  id: "1",
  typeElement: "button",
  text: "Back",
  className: "wrapper-start-back__button-back",
  parentElement: conteinerStartBack,
};
const buttonBack = createDomNode(descriptionBack);

const descriptionWrapperRoadCar = {
  typeElement: "div",
  className: "car-container__wrapper-road-car",
  parentElement: conteinerCars,
};
const wrapperRoadCar = createDomNode(descriptionWrapperRoadCar);

const descriptionCar = {
    typeElement: "div",
    className: "wrapper-road-car_car",
    parentElement: wrapperRoadCar,
};
const car = createDomNode(descriptionCar);
