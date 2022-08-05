import { doc } from 'prettier';
import { fetchRequest } from '../fetch/fetch';
import { body, createDomNode } from '../markup/base/base';
import { main } from '../markup/body/body';
import { GET_WINNER, IdataWinners } from '../winners/save-winners';

/* eslint-disable import/prefer-default-export */
export const showGaragePage = (event: MouseEvent) => {
  const element = event.target as HTMLElement;
  //   const main = document.querySelector('main') as HTMLElement;
  const footer = document.querySelector('footer') as HTMLElement;
  if (footer.style.display === 'none') {
    element.style.backgroundColor = 'white';
    main.style.display = 'flex';
    footer.style.display = 'block';
  } else {
    element.style.backgroundColor = 'red';
    main.style.display = 'none';
    footer.style.display = 'none';
  }
};
const descriptionConteinerGarage = {
  typeElement: 'section',
  className: 'container-garage',
  // parentElement: currentPage,
};
const conteinerGarage = createDomNode(descriptionConteinerGarage);
body.append(conteinerGarage);

const descriptionH3 = {
  typeElement: 'h3',
  className: 'container-garage__title-winners',
  text: 'Winners',
  parentElement: conteinerGarage,
};
const h3Winners = createDomNode(descriptionH3);

const descriptionH5 = {
  typeElement: 'h4',
  className: 'container-garage__title-number-page',
  text: 'Page № 1',
  parentElement: conteinerGarage,
};
const h4Page = createDomNode(descriptionH5);

const descriptionWrapperWinners = {
  typeElement: 'div',
  className: 'container-garage__wrapper-list-winners',
  parentElement: conteinerGarage,
};
const wrapperWinners = createDomNode(descriptionWrapperWinners);

const descriptionWrapperNamesColumns = {
  typeElement: 'div',
  className: 'wrapper-list-winners__names-columns',
  parentElement: conteinerGarage,
};
const wrapperNamesColumns = createDomNode(descriptionWrapperNamesColumns);

const columns = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'].forEach((item: string) => {
  const descriptionNameColumn = {
    typeElement: 'span',
    className: `names-columns__${item.split(' ').join('-').toLocaleLowerCase()}`,
    parentElement: wrapperNamesColumns,
    text: item,

  };
  createDomNode(descriptionNameColumn);
});

const createList = () => {
  const descriptionUl = {
    typeElement: 'ul',
    className: 'wrapper-list-winners__wrapper-winners',
    parentElement: wrapperNamesColumns,
  };
  const elemUl = createDomNode(descriptionUl);
  fetchRequest(GET_WINNER).then((data) => {
    console.log(data);
    const addListWinners = (results: IdataWinners[]) => {
      // debugger
      const currentElement = 0;
      if (currentElement < results.length) {
        const elementsCar = [];
        const number = currentElement + 1;
        const { id, wins, time } = results[currentElement];
        const section = (document.getElementById(String(id)) as HTMLElement);
        const modelCar = (section.querySelector('.wrapper-buttons-select-remove__h4') as HTMLElement).innerText;
        const color = (section.querySelector('.wrapper-road-car_car') as HTMLElement).style.backgroundColor;
        const descriptionLi = {
          typeElement: 'li',
          className: 'wrapper-winners__winner',
          parentElement: elemUl,
        };
        const elemLi = createDomNode(descriptionLi);

        const descriptionNumber = {
          typeElement: 'span',
          className: 'winner__number',
          text: String(number),
          parentElement: elemLi,
        };
        createDomNode(descriptionNumber);

        const descriptionCarImg = {
          typeElement: 'div',
          className: 'winner__car-img',
          color,
          parentElement: elemUl,
        };
        createDomNode(descriptionCarImg);
        const descriptionCarName = {
          typeElement: 'span',
          className: 'winner__car-name',
          parentElement: elemUl,
          text: modelCar,
        };
        createDomNode(descriptionCarName);

        const descriptionCarWins = {
          typeElement: 'span',
          className: 'winner__car-wins',
          parentElement: elemUl,
          text: String(wins),
        };
        createDomNode(descriptionCarWins);
        const descriptionCarTime = {
          typeElement: 'span',
          className: 'winner__car-time',
          text: `${String(time?.toFixed(2))} sec`,
          parentElement: elemUl,
        };
        createDomNode(descriptionCarTime);
      }
    };
    addListWinners(data);
  });
};
setTimeout(() => {
  createList();
});

// const descriptionWrapperNamesColumns = {
//   typeElement: 'ul',
//   className: 'wrapper-list-winners__list',
//   parentElement: conteinerGarage,
// };
// const wrapperNamesColumns = createDomNode(descriptionWrapperNamesColumns);
