import { fetchRequest } from '../fetch/fetch';
import { body, createDomNode } from '../markup/base/base';
import { main } from '../markup/body/body';
import { getSessinoStorage } from '../memories/sessionStorage';
import { GET_WINNER, IdataWinners } from './save-winners';
import { sortingElementsByFastest, sortingElementsBySlowest } from './sorting-amount-speed';
import { sortingElementsByLowerWinners, sortingElementsByUpperWinners } from './sorting-amount-winners';

/* eslint-disable import/prefer-default-export */
export const showGaragePage = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    const wrapperWinners = document.querySelector('.container-garage') as HTMLElement;
    if (element.classList.contains('wrapper-buttons-garage-winners__button-winners')) {
        wrapperWinners.classList.add('active-page');
        main.classList.remove('active-page');
        const buttonGarage = document.querySelector('.wrapper-buttons-garage-winners__button-garage') as HTMLElement;
        const footer = document.querySelector('footer') as HTMLElement;
        element.style.backgroundColor = 'red';
        buttonGarage.style.backgroundColor = 'white';
        main.style.display = 'none';
        // footer.style.display = 'none';

        wrapperWinners.style.display = 'block';
    }
    if (element.classList.contains('wrapper-buttons-garage-winners__button-garage')) {
        wrapperWinners.classList.remove('active-page');
        main.classList.add('active-page');
        const buttonWinners = document.querySelector('.wrapper-buttons-garage-winners__button-winners') as HTMLElement;
        const footer = document.querySelector('footer') as HTMLElement;
        element.style.backgroundColor = 'red';
        buttonWinners.style.backgroundColor = 'white';
        main.style.display = 'flex';
        // footer.style.display = 'block';

        wrapperWinners.style.display = 'none';
    }
};
//   const main = document.querySelector('main') as HTMLElement;

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
    parentElement: wrapperWinners,
};
const wrapperNamesColumns = createDomNode(descriptionWrapperNamesColumns);

const columns = ['Number', 'Car', 'Name', 'Wins', 'Best time'];
columns.forEach((item: string) => {
    const descriptionNameColumn = {
        typeElement: 'span',
        className: `names-columns__${item.split(' ').join('-').toLocaleLowerCase()}`,
        parentElement: wrapperNamesColumns,
        text: item,

    };
    createDomNode(descriptionNameColumn);
});

export const createListWinners = () => {
    wrapperWinners.innerHTML = '';
    const wrapperNamesColumnsRepeat = createDomNode(descriptionWrapperNamesColumns);
    columns.forEach((item: string) => {
        const descriptionNameColumn = {
            typeElement: 'span',
            className: `names-columns__${item.split(' ').join('-').toLocaleLowerCase()}`,
            parentElement: wrapperNamesColumnsRepeat,
            text: item,

        };
        const nameColumn = createDomNode(descriptionNameColumn);
        if (item === 'Wins' && getSessinoStorage('Sorting-winners') && getSessinoStorage('Sorting-winners')[0].sorting === 'highest') {
            nameColumn.classList.add('names-columns__wins');
            nameColumn.classList.remove('names-columns__wins__active');
            // nameColumn.id = 'Sort-active';
        } else if (item === 'Wins' && getSessinoStorage('Sorting-winners') && getSessinoStorage('Sorting-winners')[0].sorting === 'lowest') {
            nameColumn.classList.remove('names-columns__wins');
            nameColumn.classList.add('names-columns__wins__active');
            // nameColumn.id = 'Sort-active';
        }
        if (item === 'Best time' && getSessinoStorage('Sorting-speed') && getSessinoStorage('Sorting-speed')[0].sorting === 'fastest') {
            nameColumn.classList.add('names-columns__best-time');
            nameColumn.classList.remove('names-columns__best-time__active');
            // nameColumn.id = 'Sort-active';
        } else if (item === 'Best time' && getSessinoStorage('Sorting-speed') && getSessinoStorage('Sorting-speed')[0].sorting === 'slowest') {
            nameColumn.classList.remove('names-columns__best-time');
            nameColumn.classList.add('names-columns__best-time__active');
            // nameColumn.id = 'Sort-active';
        }
    });
    const descriptionUl = {
        typeElement: 'ul',
        className: 'wrapper-list-winners__wrapper-winners',
        id: 'page-garage-1',
        parentElement: wrapperWinners,
    };
    let elemUl = createDomNode(descriptionUl);

    const titlePage = document.querySelector('.container-garage__title-number-page')?.innerHTML.slice(-1);
    if (Number(titlePage) === Number(descriptionUl.id.split('-').slice(-1)[0])) {
        elemUl.style.display = 'block';
    }
    const addListWinners = (results: IdataWinners[]) => {
        let i = 0;
        h3Winners.innerText = `Winners (${results.length})`;
        return (function recursive() {
            if (i < results.length) {
                if (i % 10 === 0 && i !== 0) {
                    const numberPage = Number((i / 6).toFixed(0));
                    const descriptionUlPage = {
                        typeElement: 'ul',
                        className: 'wrapper-list-winners__wrapper-winners',
                        id: `page-garage-${numberPage}`,
                        parentElement: wrapperWinners,
                    };
                    elemUl = createDomNode(descriptionUlPage);
                }
                const number = i + 1;
                const { id, wins, time } = results[i];
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
                    parentElement: elemLi,
                };
                createDomNode(descriptionCarImg);
                const descriptionCarName = {
                    typeElement: 'span',
                    className: 'winner__car-name',
                    parentElement: elemLi,
                    text: modelCar,
                };
                createDomNode(descriptionCarName);

                const descriptionCarWins = {
                    typeElement: 'span',
                    className: 'winner__car-wins',
                    parentElement: elemLi,
                    text: String(wins),
                };
                createDomNode(descriptionCarWins);
                const descriptionCarTime = {
                    typeElement: 'span',
                    className: 'winner__car-time',
                    text: `${String(time?.toFixed(2))} sec`,
                    parentElement: elemLi,
                };
                createDomNode(descriptionCarTime);

                i += 1;
                recursive();
            }
        }());
    };
    fetchRequest(GET_WINNER).then((data) => {
        let dataSorting;
        const winnerSorting = getSessinoStorage('Sorting-winners');
        const sortingType = getSessinoStorage('Sorting-type');
        if (winnerSorting && winnerSorting[0].sorting === 'highest' && sortingType[0].sorting === 'winners') {
            dataSorting = sortingElementsByLowerWinners(data);
        } else if (winnerSorting && sortingType[0].sorting === 'winners') {
            dataSorting = sortingElementsByUpperWinners(data);
        }
        const speedSorting = getSessinoStorage('Sorting-speed');
        if (speedSorting && speedSorting[0].sorting === 'fastest' && sortingType[0].sorting === 'speed') {
            dataSorting = sortingElementsBySlowest(data);
        } else if (speedSorting && sortingType[0].sorting === 'speed') {
            dataSorting = sortingElementsByFastest(data);
        }


        addListWinners(dataSorting || data);
    });
};
setTimeout(() => {
    createListWinners();
});

// const descriptionWrapperNamesColumns = {
//   typeElement: 'ul',
//   className: 'wrapper-list-winners__list',
//   parentElement: conteinerGarage,
// };
// const wrapperNamesColumns = createDomNode(descriptionWrapperNamesColumns);
