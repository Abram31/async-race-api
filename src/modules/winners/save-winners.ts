import { aboutCar, fetchRequest, IBase_URL } from '../fetch/fetch';
import { IcarsCreate } from '../markup/body/body';

export interface IdataWinners {
    id?: number,
    wins?: number,
    time?: number,
    velocity?: number,
}

export const GET_WINNER: IBase_URL = {
  baseUrl: 'http://localhost:3000',
  additionalURL: '/winners',
  params: {
    method: 'GET',
    header: {},
    bodyData: JSON.stringify(''),
  },
};

export const saveWinners = async ({ id, time }: IdataWinners) => {
  let oldData: IdataWinners;
  await fetchRequest(GET_WINNER).then((data) => {
    console.log(data);
    oldData = data.find((item: IdataWinners) => item.id === id) || {};
    // if (!(aboutCar instanceof Response)) {
    //   oldData = aboutCar;
    // }
    // if (oldData!) {
    
    if (oldData! && oldData.id) {
      const newDataUpdate: IdataWinners = {
        wins: Number(oldData!.wins) + 1,
        // eslint-disable-next-line object-shorthand
        time: oldData.time
        && time
        && time < oldData.time!
          ? Number(time?.toFixed(2))
          : oldData.time,
      };
      
      const UPDATE_WINNER: IBase_URL = {
        baseUrl: 'http://localhost:3000',
        additionalURL: `/winners/${id}`,
        params: {
          method: 'PUT',
          header: {
            'Content-Type': 'application/json',
          },
          bodyData: JSON.stringify(newDataUpdate),
        },
      };
      fetchRequest(UPDATE_WINNER);
    } else {
      const newDataCreate: IdataWinners = {
      // eslint-disable-next-line object-shorthand
        id: id,
        wins: 1,
        // eslint-disable-next-line object-shorthand
        time: time,
      };
      const ADD_WINNER: IBase_URL = {
        baseUrl: 'http://localhost:3000',
        additionalURL: '/winners',
        params: {
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
          },
          bodyData: JSON.stringify(newDataCreate),
        },
      };
      fetchRequest(ADD_WINNER);
    }
  });
};

export const getWinners = () => {

};
