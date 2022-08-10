import {
    BASE_DATA, fetchRequest, GET_URL, IBase_URL,
} from '../../../fetch/fetch';
import { createDomNode } from '../../base/base';
import { carsCreate, main } from '../../body/body';
import menu from './wrapper-menu';

const descriptionMenuWrapperInputs = {
    typeElement: 'div',
    className: 'wrapper-menu__wrapper-input-elements',
    parentElement: menu,
};
export const menuWrapperInputs = createDomNode(descriptionMenuWrapperInputs);

const descriptionMenuWrapperCreate = {
    typeElement: 'div',
    className: 'wrapper-input-elements__menu-wrapper-create',
    parentElement: menuWrapperInputs,
};
const menuWrapperCreate = createDomNode(descriptionMenuWrapperCreate);

const descriptionCreateInput = {
    id: 'input-create',
    typeElement: 'input',
    type: 'test',
    className: 'menu-wrapper-create__input',
    parentElement: menuWrapperCreate,
};
const createInput = createDomNode(descriptionCreateInput);

const descriptionCreateInputColor = {
    typeElement: 'input',
    id: 'input-create-color',
    type: 'color',
    className: 'menu-wrapper-create__input-color',
    parentElement: menuWrapperCreate,
};
const createInputColor = createDomNode(descriptionCreateInputColor);

const descriptionCreateButton = {
    typeElement: 'button',
    id: 'input-create-color-button',
    className: 'menu-wrapper-create__button',
    text: 'Create',
    parentElement: menuWrapperCreate,
};
const createInputButton = createDomNode(descriptionCreateButton);

const descriptionMenuWrapperUpdate = {
    typeElement: 'div',
    className: 'wrapper-input-elements__menu-wrapper-update',
    parentElement: menuWrapperInputs,
};
const menuWrapperUpdate = createDomNode(descriptionMenuWrapperUpdate);

const descriptionUpdateInput = {
    typeElement: 'input',
    type: 'test',
    className: 'menu-wrapper-update__input',
    parentElement: menuWrapperUpdate,
};
const updateInput = createDomNode(descriptionUpdateInput);

const descriptionUpdateInputColor = {
    typeElement: 'input',
    type: 'color',
    className: 'menu-wrapper-update__input-color',
    parentElement: menuWrapperUpdate,
};
const updateInputColor = createDomNode(descriptionUpdateInputColor);

const descriptionUpdateButton = {
    typeElement: 'button',
    className: 'menu-wrapper-update__button',
    text: 'Update',
    parentElement: menuWrapperUpdate,
};
const updateInputButton = createDomNode(descriptionUpdateButton);

// -----------------------------Create new Car -----------------------------------------------

export interface InewCar {
  name: string,
  color: string
}
export const createNewCar = (event: MouseEvent) => {
    const inputCreateButton = document.getElementById('input-create-color-button') as HTMLInputElement;
    if ((event.target as HTMLElement).id === 'input-create-color-button') {
        const inputCreate = document.getElementById('input-create') as HTMLInputElement;

        const inputCreateColor: HTMLInputElement = document.getElementById('input-create-color') as HTMLInputElement;

        const propetiesNewCar = {
            name: inputCreate.value,
            color: inputCreateColor.value,
        };

        // eslint-disable-next-line camelcase
        const create_POST_REQUEST: IBase_URL = {
            baseUrl: 'http://localhost:3000',
            additionalURL: '/garage',
            params: {
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                bodyData: JSON.stringify(propetiesNewCar),
            },
        };
        fetchRequest(create_POST_REQUEST).then(() => {
            fetchRequest(GET_URL).then(() => {
                carsCreate(BASE_DATA);
            });
        });
    }
    return event;
};

export const selectCar = (event: MouseEvent) => {
    const selectButton = event.target as HTMLElement;
    const section = selectButton.closest('section') as HTMLElement;
    const inputUpdate = (document.querySelector('.menu-wrapper-update__input') as HTMLInputElement);
    const inputColor = (document.querySelector('.menu-wrapper-update__input-color') as HTMLInputElement);
    const nameCar = (section.querySelector('.wrapper-buttons-select-remove__h4') as HTMLElement).innerText;
    const car = (section.querySelector('.wrapper-road-car_car') as HTMLElement);
    const color = car.style.backgroundColor;
    // console.log(inputUpdate.value);

    // inputUpdate.value = nameCar;
    // // inputColor.value = color;
    // inputColor.addEventListener('change', () => {
    //     color = inputColor.value;
    //     console.log(inputColor.value);
    // });

    const allSelectButtons = document.querySelectorAll('.wrapper-buttons-select-remove__select');
    if (!selectButton.classList.contains('on')) {
        allSelectButtons?.forEach((select) => {
            (select as HTMLElement).classList.remove('on');
            // eslint-disable-next-line no-param-reassign
            (select as HTMLElement).style.background = 'white';
        });
        selectButton.classList.add('on');
        selectButton.style.background = 'red';
    } else {
        selectButton.classList.remove('on');
        selectButton.style.background = 'white';
    }
    const carId = selectButton.closest('section')?.id;
};

export const updateCar = (event:MouseEvent) => {
    const butonUpdate = event.target as HTMLElement;
    const inputValue = (document.querySelector('.menu-wrapper-update__input') as HTMLInputElement).value;
    const color = (document.querySelector('.menu-wrapper-update__input-color') as HTMLInputElement).value;

    const selectElement = main.querySelector('.on');
    const sectionCar = selectElement?.closest('section') as HTMLElement;
    const idCar = sectionCar.id;
    const сar = sectionCar?.querySelector('.wrapper-road-car_car') as HTMLDivElement;
    const nameCar = sectionCar?.querySelector('.wrapper-buttons-select-remove__h4') as HTMLDivElement;
    nameCar.textContent = inputValue;
    сar.style.backgroundColor = color;

    const descriptionNewCar: InewCar = {
        name: inputValue,
        // eslint-disable-next-line object-shorthand
        color: color,

    };
    // eslint-disable-next-line camelcase
    const PUT_UPDATE_CAR: IBase_URL = {
        baseUrl: 'http://localhost:3000',
        additionalURL: `/garage/${Number(idCar)}`,
        params: {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json',
            },
            bodyData: JSON.stringify(descriptionNewCar),
        },
    };
    fetchRequest(PUT_UPDATE_CAR);
};

// --------------------------------Delete Car --------------------------------------------------------------------

// export const removeCar = (event: MouseEvent) => {
//   const element = event.target as HTMLElement;
//   const carId = element.closest('section')?.id;
//   const DELETE_URL: IBase_URL = {
//     baseUrl: 'http://localhost:3000',
//     additionalURL: `/garage/${carId}`,
//     params: {
//       method: 'DELETE',
//     },
//   };
//   fetchRequest(DELETE_URL).then(() => {
//     console.log(BASE_DATA);

//     fetchRequest(GET_URL).then(() => {
//       carsCreate(BASE_DATA);
//     });
//   });
// };

// ----------------------------------------------Generate Car--------------------------------
// export const generateCars = async () => {
//   const cars = JSON.parse(JSON.stringify(dataCars));
//   const nameCars = Object.keys(cars.list);
//   // eslint-disable-next-line max-len
//   const getRandomArbitrary = (min:number, max:number):number => Math.round(Math.random() * (max - min) + min);
//   async function generate100RequestsToCar() {
//     for (let i = 0; i < 100; i += 1) {
//       const numberCarBrand = getRandomArbitrary(0, nameCars.length - 1);
//       const carBrand: string = nameCars[numberCarBrand];
//       const listCarModels = cars.list[carBrand];
//       const numCarModel = getRandomArbitrary(0, listCarModels.length - 1);
//       const carModel = listCarModels[numCarModel];
//       const carColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

//       const propetiesNewCar = {
//         name: `${carBrand} ${carModel}`,
//         color: carColor,
//       };

//       // eslint-disable-next-line camelcase
//       const create_POST_REQUEST: IBase_URL = {
//         baseUrl: 'http://localhost:3000',
//         additionalURL: '/garage',
//         params: {
//           method: 'POST',
//           header: { 'Content-Type': 'application/json' },
//           bodyData: JSON.stringify(propetiesNewCar),
//         },
//       };
//       // eslint-disable-next-line no-await-in-loop
//       await fetchRequest(create_POST_REQUEST);
//     }
//   }
//   await generate100RequestsToCar();
//   fetchRequest(GET_URL).then(() => {
//     carsCreate(BASE_DATA);
//   });
// };
