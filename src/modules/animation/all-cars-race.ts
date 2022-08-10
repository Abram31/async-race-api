/* eslint-disable no-param-reassign */
const allCarsRun = (event:MouseEvent) => {
    const element = event.target as HTMLElement;
    element.style.pointerEvents = 'none';
    element.style.backgroundColor = 'grey';

    const allButtons = document.querySelectorAll('button');
    allButtons.forEach((button: HTMLButtonElement) => {
        if (!button.classList.contains('car-container__wrapper-start-back')) {
            button.style.pointerEvents = 'none';
            button.style.backgroundColor = 'grey';
        }
    });

    const ressetButton = element.closest('.wrapper-input-elements__wrapper-buttons')
        ?.querySelector('.wrapper-buttons__button-resset') as HTMLElement;
    ressetButton.style.pointerEvents = 'auto';
    ressetButton.style.backgroundColor = 'white';

    sessionStorage.removeItem('Cars-speed');
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
