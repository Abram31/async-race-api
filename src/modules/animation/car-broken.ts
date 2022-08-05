import { deleteSessionStorage } from '../memories/sessionStorage';

// const history = speedHistory
const carBroken = (response: Response) => {
  const idCar = response.url.match(/id=\d+/)![0]?.split('=').slice(-1)[0];
  const sectionCar = document.getElementById(idCar);
  const car = sectionCar?.querySelector('.wrapper-road-car_car') as HTMLDivElement;
  const numberCarAnimation = car.id.match(/\d+/)![0];
  console.log(numberCarAnimation);
  deleteSessionStorage('Cars-speed', { id: idCar });
  // debugger
  window.cancelAnimationFrame(Number(numberCarAnimation));
  // speedHistory.delete(idCar);
  // console.log(speedHistory);
};

export default carBroken;
