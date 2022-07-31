// eslint-disable-next-line camelcase
import {
  aboutCar, BASE_DATA, fetchRequest, IBase_URL,
} from '../fetch/fetch';
import distanceReset from './distance-reset';

interface IanimateRun {
    id: string;
    duration: number;
    draw: number;
    timing: number;
}

const historyAnimations = new Map();

// eslint-disable-next-line import/prefer-default-export
export function animateRun(event: MouseEvent) {
  // eslint-disable-next-line no-unused-vars
  let time: number;
  let speedCar: number;

  const elem = event.target as HTMLElement;
  const carId = elem.closest('section')?.id;

  const section = document.getElementById(`${carId}`) as HTMLDivElement;
  const animationDiv = section.querySelector('.wrapper-road-car_car') as HTMLDivElement;
  const valFlexBasic = getComputedStyle(animationDiv).flexBasis.slice(0, -1);
  if (Number(valFlexBasic) < 100) {
    distanceReset(event);
  }

  // eslint-disable-next-line camelcase
  const descriptionStartRequest :IBase_URL = {
    baseUrl: 'http://localhost:3000',
    additionalURL: `/engine?id=${carId}&status=started`,
    params: {
      method: 'PATCH',
    },
  };

  fetchRequest(descriptionStartRequest).then(() => {
    const data = aboutCar;
    speedCar = data.velocity;
    time = 100 / speedCar;
  });

  const animation = () => {
    const valueFlexBasic = getComputedStyle(animationDiv).flexBasis.slice(0, -1);
    if (Number(valueFlexBasic) > 10) {
      animationDiv.style.flexBasis = `${Number(valueFlexBasic) - (10 / speedCar)}%`;

      const idAnimation = window.requestAnimationFrame(animation);
      animationDiv.id = `Animation № ${idAnimation}`;
    //   if (!historyAnimations.get(idAnimation)) {
    //     historyAnimations.set(idAnimation, idAnimation);
    //     console.log(historyAnimations);
    }
    // } else if (Number(valueFlexBasic) <= 10) {
    //   historyAnimations.delete(idAnimation);
    //   console.log(historyAnimations);
    // }
  };
  window.requestAnimationFrame(animation);
}
