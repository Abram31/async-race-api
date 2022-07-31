const allCarsResset = () => {
  const allCarSections = document.querySelectorAll('section');
  allCarSections.forEach((section) => {
    const button = section.querySelector('.wrapper-start-back__button-back') as HTMLElement;
    const eventClick: Event = new Event('click', { bubbles: true });
    button.dispatchEvent(eventClick);
  });
};

export default allCarsResset;
