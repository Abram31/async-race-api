// eslint-disable-next-line camelcase
import {
  aboutCar, BASE_DATA, fetchRequest, IBase_URL,
} from '../fetch/fetch';
import { addSessionStorage, getSessinoStorage, IData } from '../memories/sessionStorage';
import highestSpeed from '../winners/highest-speed';
import distanceReset from './distance-reset';
// import { addSessionStorage, getSessinoStorage } from '../memories/sessionStorage';

interface IanimateRun {
    id: string;
    duration: number;
    draw: number;
    timing: number;
}

// export const speedHistory: Map<string, string> = new Map();
// eslint-disable-next-line import/prefer-default-export
export function animateRun(event: MouseEvent) {
  // eslint-disable-next-line no-unused-vars
  let time: number;
  let speedCar: number;

  const elem = event.target as HTMLElement;

  elem.style.pointerEvents = 'none';
  elem.style.backgroundColor = 'grey';

  const carId: string = (elem.closest('section') as HTMLElement)?.id;
  const section = document.getElementById(`${carId}`) as HTMLDivElement;

  const buttonBack = section.querySelector('.wrapper-start-back__button-back') as HTMLElement;
  buttonBack.style.pointerEvents = 'auto';
  buttonBack.style.backgroundColor = 'white';
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
  const descriptionDriveRequest: IBase_URL = {
    baseUrl: 'http://localhost:3000',
    additionalURL: `/engine?id=${carId}&status=drive`,
    params: {
      method: 'PATCH',
    },
  };

  fetchRequest(descriptionStartRequest).then(() => {
    if (!(aboutCar instanceof Response)) {
      const data = aboutCar;
      if (data.velocity) {
        speedCar = data.velocity;
      }
      time = (90 / (speedCar / 500)) / 60;
      addSessionStorage('Cars-speed', { id: carId, speed: String(speedCar) });
    }
  }).then(async () => {
    await fetchRequest(descriptionDriveRequest);
  });

  const animation = () => {
    const valueFlexBasic = getComputedStyle(animationDiv).flexBasis.slice(0, -1);
    if (Number(valueFlexBasic) > 10) {
      animationDiv.style.flexBasis = `${Number(valueFlexBasic) - (speedCar / 500)}%`;

      const idAnimation = window.requestAnimationFrame(animation);
      animationDiv.id = `Animation № ${idAnimation}`;
    } else {
      const speedHistory: IData[] = getSessinoStorage('Cars-speed');
      section.setAttribute('animation', 'end');
      highestSpeed(speedHistory);
    }
  };
  window.requestAnimationFrame(animation);
}
