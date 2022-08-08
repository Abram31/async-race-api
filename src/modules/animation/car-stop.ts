import { fetchRequest, IBase_URL } from '../fetch/fetch';

const carStop = async (event: MouseEvent) => {
  const element = event.target as HTMLElement;
  element.style.pointerEvents = 'none';
  element.style.backgroundColor = 'grey';
// debugger
  const sectionCar = element.closest('section') as HTMLElement;
   const car = sectionCar?.querySelector('.wrapper-road-car_car') as HTMLDivElement;

  const descriptionStop: IBase_URL = {
    baseUrl: 'http://localhost:3000',
    additionalURL: `/engine?id=${sectionCar.id}&status=stopped`,
    params: {
      method: 'PATCH',
    },
  };

  await fetchRequest(descriptionStop);
  const numberCarAnimation = car.id.match(/\d+/)![0];
  window.cancelAnimationFrame(Number(numberCarAnimation));
  car.style.flexBasis = '100%';
  const buttonBack = sectionCar.querySelector('.wrapper-start-back__button-start') as HTMLElement;
  buttonBack.style.pointerEvents = 'auto';
  buttonBack.style.backgroundColor = 'white';
};

export default carStop;
