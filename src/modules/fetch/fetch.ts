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
    if (method === 'GET' || method === 'PATCH') {
      response = await fetch(`${baseUrl}${additionalURL}`);
    } else {
      response = await fetch(`${baseUrl}${additionalURL}`, {
        method,
        headers: header,
        body: bodyData,

      });
    }
    const json = await response?.json();
    BASE_DATA = Array.isArray(json) ? json : [];
    // const titleGarage = document.querySelector('.title-garage') as HTMLHRElement;
    // titleGarage.innerText = `Garage: (${String(json.length)})`;

    // titleGarage.innerText = `Garage: (${String(json.length)})`;
    // mainH3.innerText = `Garage: (${String(json.length)})`;

    console.log(json);
  } catch {
    console.error(Error('fetch'));
  }
};
fetchRequest(GET_URL);
