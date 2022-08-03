const carStop = (event: MouseEvent) => {
  const element = event.target as HTMLElement;
  const sectionCar = element.closest('section') as HTMLElement;
  const car = sectionCar?.querySelector('.wrapper-road-car_car') as HTMLDivElement;
  const numberCarAnimation = car.id.match(/\d+/)![0];
  console.log(numberCarAnimation);

  window.cancelAnimationFrame(Number(numberCarAnimation));
};

export default carStop;
