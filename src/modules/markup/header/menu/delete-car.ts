import {
  BASE_DATA, fetchRequest, GET_URL, IBase_URL,
} from '../../../fetch/fetch';
import { createListWinners } from '../../../winners/winners-page';
import { carsCreate } from '../../body/body';

const removeCar = (event: MouseEvent) => {
  const element = event.target as HTMLElement;
  const carId = element.closest('section')?.id;
  const DELETE_URL: IBase_URL = {
    baseUrl: 'http://localhost:3000',
    additionalURL: `/garage/${carId}`,
    params: {
      method: 'DELETE',
    },
  };
  fetchRequest(DELETE_URL).then(() => {

    fetchRequest(GET_URL).then(() => {
      carsCreate(BASE_DATA);
    });
  });

  const DELETE_URL_WINNERS: IBase_URL = {
    baseUrl: 'http://localhost:3000',
    additionalURL: `/winners/${carId}`,
    params: {
      method: 'DELETE',
    },
  };
  fetchRequest(DELETE_URL_WINNERS).then(() => {

    createListWinners();
  });
};

export default removeCar;
