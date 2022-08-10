// import { main } from '../body/body';

const pagination = (event: MouseEvent) => {
  const element = (event.target as HTMLElement);
  const activePage = document.querySelector('.active-page');
  const main = document.querySelector('main') as HTMLElement;

  if (main.classList.contains('active-page')) {
    const titleNumberPage = (main.querySelector('.title-page') as HTMLHRElement);
    const currentNumberPage = titleNumberPage.textContent?.split(' ').slice(-1);
    const pages = main.querySelectorAll('.wrapper-cars__page');
    const amountPages = pages.length;

    if (element.textContent === 'Next page') {
      if (Number(currentNumberPage) < amountPages) {
        const changePagePlus = Number(currentNumberPage) + 1;
        titleNumberPage.textContent = `Page № ${changePagePlus}`;
        pages.forEach((page: Element) => {
          // eslint-disable-next-line no-param-reassign
          (page as HTMLElement).style.display = 'none';
        });
        const showElement = document.getElementById(`Page № ${changePagePlus}`) as HTMLElement;
        showElement.style.display = 'block';
      }
    } else if (element.textContent === 'Prev page') {
      const changePageMinus = Number(currentNumberPage) - 1;

      if (Number(currentNumberPage) > 1) {
        titleNumberPage.textContent = `Page # ${changePageMinus}`;
        pages.forEach((page: Element) => {
          // eslint-disable-next-line no-param-reassign
          (page as HTMLElement).style.display = 'none';
        });
        const showElement = document.getElementById(`Page № ${changePageMinus}`) as HTMLElement;
        showElement.style.display = 'block';
      }
    }
  }
  const winnersContainer = document.querySelector('.container-garage') as HTMLElement;
  if (winnersContainer.classList.contains('active-page')) {
    const titleNumberPageWinners = (winnersContainer.querySelector('.container-garage__title-number-page') as HTMLHRElement);
    const currentNumberPageWinners = titleNumberPageWinners.textContent?.split(' ').slice(-1);
    const pages = winnersContainer.querySelectorAll('.wrapper-list-winners__wrapper-winners');
    const amountPagesWinners = pages.length;
    if (element.textContent === 'Next page') {
      if (Number(currentNumberPageWinners) < amountPagesWinners) {
        const changePagePlus = Number(currentNumberPageWinners) + 1;
        titleNumberPageWinners.textContent = `Page № ${changePagePlus}`;
        pages.forEach((page: Element) => {
          // eslint-disable-next-line no-param-reassign
          (page as HTMLElement).style.display = 'none';
        });
        const showElement = document.getElementById(`page-garage-${changePagePlus}`) as HTMLElement;
        showElement.style.display = 'block';
      }
    } else if (element.textContent === 'Prev page') {
      const changePageMinus = Number(currentNumberPageWinners) - 1;

      if (Number(currentNumberPageWinners) > 1) {
        titleNumberPageWinners.textContent = `Page № ${changePageMinus}`;
        pages.forEach((page: Element) => {
          // eslint-disable-next-line no-param-reassign
          (page as HTMLElement).style.display = 'none';
        });
        const showElement = document.getElementById(`page-garage-${changePageMinus}`) as HTMLElement;
        showElement.style.display = 'block';
      }
    }
  }
};

export default pagination;
