import { main } from '../body/body';

const pagination = (event: MouseEvent) => {
  const titleNumberPage = (main.querySelector('.title-page') as HTMLHRElement);
  const currentNumberPage = titleNumberPage.textContent?.split(' ').slice(-1);
  const pages = main.querySelectorAll('.wrapper-cars__page');
  const amountPages = pages.length;
  const element = (event.target as HTMLElement);
  if (element.textContent === 'Next page') {
    if (Number(currentNumberPage) < amountPages) {
      const changePagePlus = Number(currentNumberPage) + 1;
      titleNumberPage.textContent = `Page # ${changePagePlus}`;
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
};

export default pagination;
