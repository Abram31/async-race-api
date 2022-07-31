const allCarsRun = () => {
  const allCarSections = document.querySelectorAll('section');
  allCarSections.forEach((section) => {
    const button = section.querySelector('.wrapper-start-back__button-start') as HTMLElement;
    const eventClick: Event = new Event('click', { bubbles: true });
    button.dispatchEvent(eventClick);
  });
};

export default allCarsRun;
