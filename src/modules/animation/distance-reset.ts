const distanceReset = (event: MouseEvent) => {
  const elem = event.target as HTMLElement;
  const carId = elem.closest('section')?.id;
  const section = document.getElementById(`${carId}`) as HTMLDivElement;
  const animationDiv = section.querySelector('.wrapper-road-car_car') as HTMLDivElement;
  animationDiv.style.flexBasis = '100%';
  const animationId = Number(animationDiv.id.split(' ').slice(-1));
  window.cancelAnimationFrame(animationId);
};

export default distanceReset;
