// import fetch, { RequestInit } from 'node-fetch';
import carBroken from '../animation/car-broken';
import carStop from '../animation/car-broken';
import { IcarsCreate, mainH3 } from '../markup/body/body';

export interface IBase_URL {
  baseUrl: string;
  additionalURL: string;
  params: {
    method:string,
    header?: Record <string, string> | {},
    bodyData?:string,
  },
}
export const GET_URL: IBase_URL = {
  baseUrl: 'http://localhost:3000',
  additionalURL: '/garage',
  params: {
    method: 'GET',
    header: {},
    bodyData: JSON.stringify(''),
  },
};

// eslint-disable-next-line import/no-mutable-exports
export let BASE_DATA: IcarsCreate[];
// eslint-disable-next-line import/no-mutable-exports
export let aboutCar: IcarsCreate | Response;

export const fetchRequest = async ({
  baseUrl,
  additionalURL,
  params: {
    method,
    header,
    bodyData,
  },
}: IBase_URL) => {
  let response;
  try {
    if (method === 'GET') {
      response = await fetch(`${baseUrl}${additionalURL}`);
    } else {
      response = await fetch(`${baseUrl}${additionalURL}`, {
        method,
        headers: header,
        body: bodyData,

      });
    }
    const json = await response?.json();
    if (Array.isArray(json)) {
      BASE_DATA = json;
    } else {
      aboutCar = json;
    }
  } catch {
    if (response instanceof Response) {
      aboutCar = response;
      if (aboutCar.status === 500) {
        carBroken(aboutCar);
        
      }
    }
  }
};

fetchRequest(GET_URL);
