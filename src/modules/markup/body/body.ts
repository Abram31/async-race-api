import {
  BASE_DATA, fetchRequest, GET_URL, IBase_URL,
} from '../../fetch/fetch';
import { createDomNode } from '../base/base';
import { createNewCar, generateCars, removeCar } from '../header/menu/create-update';

const body = document.querySelector('body') as HTMLElement;
body.addEventListener('click', (event) => {
  const element = event.target as HTMLElement;
  createNewCar(event);
  if (element.classList.contains('wrapper-buttons-select-remove__remove')) {
    removeCar(event);
  }
  if (element.classList.contains('wrapper-buttons__button-generate-cars')) {
    generateCars();
  }
});

const descriptionMain = {
  typeElement: 'main',
  className: 'main',
  parentElement: body,
};
const main = createDomNode(descriptionMain);

const descriptionH3 = {
  typeElement: 'h3',
  className: 'title-garage',
  text: 'Garage',
  parentElement: main,
};
export const mainH3 = createDomNode(descriptionH3);

const descriptionH4 = {
  typeElement: 'h4',
  className: 'title-page',
  text: 'Page # 1',
  parentElement: main,
};
const h4 = createDomNode(descriptionH4);

const descriptionWrapperCars = {
  typeElement: 'div',
  className: 'wrapper-cars',
  parentElement: main,
};
const wrapperCars = createDomNode(descriptionWrapperCars) as HTMLDivElement;

// -----------------------------------CAR ----------------------

export interface IcarsCreate {
  id: number;
  color: string;
  name: string;
}

export const carsCreate = (data: IcarsCreate[]) => {
  wrapperCars.innerHTML = '';
  if (data) {
    data.forEach(({ id, color, name }: IcarsCreate) => {
      const descriptionConteinerCar = {
        id: String(id),
        typeElement: 'section',
        className: 'wrapper-cars__car-container',
        parentElement: wrapperCars,
      };
      const conteinerCars = createDomNode(descriptionConteinerCar);

      const descriptionConteinerButtons = {
        typeElement: 'div',
        className: 'car-container__wrapper-buttons-select-remove',
        parentElement: conteinerCars,
      };
      const conteinerButtons = createDomNode(descriptionConteinerButtons);

      const descriptionButtonSelect = {
        typeElement: 'button',
        text: 'Select',
        className: 'wrapper-buttons-select-remove__select',
        parentElement: conteinerButtons,
      };
      const buttonSelect = createDomNode(descriptionButtonSelect);

      const descriptionButtonRemove = {
        typeElement: 'button',
        text: 'Remove',
        className: 'wrapper-buttons-select-remove__remove',
        parentElement: conteinerButtons,
      };
      const buttonRemove = createDomNode(descriptionButtonRemove);

      const descriptionButtonsh4 = {
        typeElement: 'span',
        text: name,
        colorText: color,
        className: 'wrapper-buttons-select-remove__h4',
        parentElement: conteinerButtons,
      };
      const buttonsH4 = createDomNode(descriptionButtonsh4);

      const descriptionConteinerStartBack = {
        typeElement: 'div',
        className: 'car-container__wrapper-start-back',
        parentElement: conteinerCars,
      };
      const conteinerStartBack = createDomNode(descriptionConteinerStartBack);

      const descriptionStart = {
        typeElement: 'button',
        text: 'Start',
        className: 'wrapper-start-back__button-start',
        parentElement: conteinerStartBack,
      };
      const buttonStart = createDomNode(descriptionStart);

      const descriptionBack = {
        typeElement: 'button',
        text: 'Back',
        className: 'wrapper-start-back__button-back',
        parentElement: conteinerStartBack,
      };
      const buttonBack = createDomNode(descriptionBack);

      const descriptionWrapperRoadCar = {
        typeElement: 'div',
        className: 'car-container__wrapper-road-car',
        parentElement: conteinerCars,
      };
      const wrapperRoadCar = createDomNode(descriptionWrapperRoadCar);

      const descriptionCar = {
        typeElement: 'div',
        className: 'wrapper-road-car_car',
        color,
        parentElement: wrapperRoadCar,
      };
      const car = createDomNode(descriptionCar);
    });
  }
  const titleGarage = document.querySelector('.title-garage') as HTMLHRElement;
  titleGarage.innerText = `Garage: (${String(data.length)})`;
};

fetchRequest(GET_URL).then(() => {
  carsCreate(BASE_DATA);
});
