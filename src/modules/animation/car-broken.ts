const carBroken = (response: Response) => {
  const idCar = response.url.match(/id=\d+/)![0]?.split('=').slice(-1)[0];
  const sectionCar = document.getElementById(idCar);
  const car = sectionCar?.querySelector('.wrapper-road-car_car') as HTMLDivElement;
  const numberCarAnimation = car.id.match(/\d+/)![0];
  console.log(numberCarAnimation);

  window.cancelAnimationFrame(Number(numberCarAnimation));
//   const elem = event.target as HTMLElement;
//   const carId = elem.closest('section')?.id;
//   const section = document.getElementById(`${carId}`) as HTMLDivElement;
//   const animationDiv = section.querySelector('.wrapper-road-car_car') as HTMLDivElement;
//   animationDiv.style.flexBasis = '100%';
//   const animationId = Number(animationDiv.id.split(' ').slice(-1));
//   window.cancelAnimationFrame(animationId);
};

export default carBroken;


