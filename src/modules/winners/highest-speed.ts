/* eslint-disable prefer-const */
import { body, createDomNode } from '../markup/base/base';
import { main } from '../markup/body/body';
import { IData } from '../memories/sessionStorage';
import { IdataWinners, saveWinners } from './save-winners';

// eslint-disable-next-line import/no-mutable-exports
export let popapWinner: HTMLSpanElement;

const highestSpeed = (speedHistory: IData[]) => {
  const hightSpeedElement = speedHistory
    .sort((a, b) => Number(b.speed) - Number(a.speed))[0];
  const highestTime = (90 / (Number(hightSpeedElement.speed) / 500)) / 60;
  console.log(hightSpeedElement);
  console.log(highestTime);

  const spanWinner = main.querySelector('.title-winner') as HTMLElement;
  const winnerSection = document.getElementById(hightSpeedElement.id) as HTMLElement;
  const pageSection = winnerSection.closest('.wrapper-cars__page') as HTMLElement;
  console.log(pageSection);

  const titleWinnerElement = (winnerSection?.querySelector('.wrapper-buttons-select-remove__h4') as HTMLElement)?.textContent;

  if (!pageSection.getAttribute('winner')) {
    const descriptionPopapWinner = {
      typeElement: 'span',
      className: 'title-winner',
      text: `Win the ${titleWinnerElement} 
    With time ${Number(highestTime).toFixed(2)}s`,
      parentElement: main,
    };
    popapWinner = createDomNode(descriptionPopapWinner);
    pageSection.setAttribute('winner', String(titleWinnerElement));
    const removePopap = () => {
      popapWinner.remove();
      body.removeEventListener('click', removePopap);
    };
    body.addEventListener('click', removePopap);

    const dataForSave: IdataWinners = {
      id: Number(hightSpeedElement.id),
      time: highestTime,
    };
    saveWinners(dataForSave);
  }

  const checkAnimations = () => {
    const animationState = pageSection.querySelectorAll('section');
    let workAnimation = [];
    animationState.forEach((element: HTMLElement) => {
      if (!element.getAttribute('Animation')) {
        workAnimation.push(element);
      }
    });
    if (workAnimation.length === 0) {
      animationState.forEach((element: HTMLElement) => {
        element.removeAttribute('Animation');
        pageSection.removeAttribute('winner');
      });
    }
  };

  checkAnimations();
};

export default highestSpeed; popapWinner!;
