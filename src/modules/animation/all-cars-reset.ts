const allCarsResset = (event:MouseEvent) => {
  const element = event.target as HTMLElement;
  element.style.pointerEvents = 'none';
  element.style.backgroundColor = 'grey';



  const pageNumber = (document.querySelector('.title-page') as HTMLHRElement).textContent?.split(' ').slice(-1);
  const currentPage = document.getElementById(`Page № ${pageNumber}`) as HTMLElement;
  const allCarSections = currentPage.querySelectorAll('section.wrapper-cars__car-container');
  allCarSections.forEach((section) => {
    const eventClick: Event = new Event('click', { bubbles: true });
    const button = section.querySelector('.wrapper-start-back__button-back') as HTMLElement;
    button.dispatchEvent(eventClick);
  });
  const buttonRace = element.closest('.wrapper-input-elements__wrapper-buttons')
    ?.querySelector('.wrapper-buttons__button-race') as HTMLElement;
  buttonRace.style.pointerEvents = 'auto';
  buttonRace.style.backgroundColor = 'white';
};

export default allCarsResset;
