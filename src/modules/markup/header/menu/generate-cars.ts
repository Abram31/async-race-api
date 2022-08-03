import { BASE_DATA, fetchRequest, GET_URL, IBase_URL } from '../../../fetch/fetch';
import { carsCreate } from '../../body/body';
import * as dataCars from '../../body/cars.json';

const generateCars = async () => {
  const cars = JSON.parse(JSON.stringify(dataCars));
  const nameCars = Object.keys(cars.list);
  // eslint-disable-next-line max-len
  const getRandomArbitrary = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min);
  async function generate100RequestsToCar() {
    for (let i = 0; i < 100; i += 1) {
      const numberCarBrand = getRandomArbitrary(0, nameCars.length - 1);
      const carBrand: string = nameCars[numberCarBrand];
      const listCarModels = cars.list[carBrand];
      const numCarModel = getRandomArbitrary(0, listCarModels.length - 1);
      const carModel = listCarModels[numCarModel];
      const carColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      const propetiesNewCar = {
        name: `${carBrand} ${carModel}`,
        color: carColor,
      };

      // eslint-disable-next-line camelcase
      const create_POST_REQUEST: IBase_URL = {
        baseUrl: 'http://localhost:3000',
        additionalURL: '/garage',
        params: {
          method: 'POST',
          header: { 'Content-Type': 'application/json' },
          bodyData: JSON.stringify(propetiesNewCar),
        },
      };
      // eslint-disable-next-line no-await-in-loop
      await fetchRequest(create_POST_REQUEST);
    }
  }
  await generate100RequestsToCar();
  fetchRequest(GET_URL).then(() => {
    carsCreate(BASE_DATA);
  });
};

export default generateCars;
