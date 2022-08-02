// import fetch, { RequestInit } from 'node-fetch';
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
export let aboutCar: IcarsCreate;

export const fetchRequest = async ({
  baseUrl,
  additionalURL,
  params: {
    method,
    header,
    bodyData,
  },
}: IBase_URL) => {
  try {
    let response;
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
    // const titleGarage = document.querySelector('.title-garage') as HTMLHRElement;
    // titleGarage.innerText = `Garage: (${String(json.length)})`;

    // titleGarage.innerText = `Garage: (${String(json.length)})`;
    // mainH3.innerText = `Garage: (${String(json.length)})`;

    console.log(json);
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    // we'll proceed, but let's report it
    console.log(message);
    
  }
};
fetchRequest(GET_URL);
