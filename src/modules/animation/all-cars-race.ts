const allCarsRun = () => {
  const pageNumber = (document.querySelector('.title-page') as HTMLHRElement).textContent?.split(' ').slice(-1);
  const currentPage = document.getElementById(`Page № ${pageNumber}`) as HTMLElement;
  const allCarSections = currentPage?.querySelectorAll('section');
  allCarSections.forEach((section) => {
    const button = section.querySelector('.wrapper-start-back__button-start') as HTMLElement;
    const eventClick: Event = new Event('click', { bubbles: true });
    button.dispatchEvent(eventClick);
  });
};

export default allCarsRun;
