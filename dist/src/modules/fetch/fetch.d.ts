import { IcarsCreate } from '../markup/body/body';
import { IdataWinners } from '../winners/save-winners';
export interface IBase_URL {
    baseUrl: string;
    additionalURL: string;
    params: {
        method: string;
        header?: Record<string, string> | {};
        bodyData?: string;
    };
}
export declare const GET_URL: IBase_URL;
export declare let BASE_DATA: IcarsCreate[];
export declare let aboutCar: IcarsCreate | Response | IdataWinners;
export declare const fetchRequest: ({ baseUrl, additionalURL, params: { method, header, bodyData, }, }: IBase_URL) => Promise<IcarsCreate[]>;
