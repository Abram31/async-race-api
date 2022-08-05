import { createDomNode } from '../markup/base/base';
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
  const winnerSection = document.getElementById(hightSpeedElement.id);
  const titleWinnerElement = (winnerSection?.querySelector('.wrapper-buttons-select-remove__h4') as HTMLElement)?.textContent;

  if (!main.contains(main.querySelector('.title-winner'))) {
    const descriptionPopapWinner = {
      typeElement: 'span',
      className: 'title-winner',
      text: `Win the ${titleWinnerElement} 
    With time ${Number(highestTime).toFixed(2)}s`,
      parentElement: main,
    };
    popapWinner = createDomNode(descriptionPopapWinner);
  }

  const dataForSave: IdataWinners = {
    id: Number(hightSpeedElement.id),
    time: highestTime,
  };
  saveWinners(dataForSave);
};

export default highestSpeed; popapWinner!;
