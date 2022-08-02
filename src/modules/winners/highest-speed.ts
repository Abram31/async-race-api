import { createDomNode } from '../markup/base/base';
import { main } from '../markup/body/body';

// eslint-disable-next-line import/no-mutable-exports
export let popapWinner: HTMLSpanElement;

const highestSpeed = (speedHistory: Map<string, string>) => {
  const hightSpeedElement = Array.from(speedHistory)
    .sort((a, b) => Number(b[1]) - Number(a[1]))[0];
  const highestTime = (90 / (Number(hightSpeedElement[1]) / 500)) / 60;
  console.log(hightSpeedElement);
  console.log(highestTime);

  const spanWinner = main.querySelector('.title-winner') as HTMLElement;
  const winnerSection = document.getElementById(hightSpeedElement[0]);
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
  // else {
  // spanWinner!.textContent = `Win the ${titleWinnerElement}.
  // With time ${Number(highestTime).toFixed(2)}s`;
  // }
};

export default highestSpeed; popapWinner!;
