import { IBase_URL } from '../fetch/fetch';
export interface IdataWinners {
    id?: number;
    wins?: number;
    time?: number;
    velocity?: number;
}
export declare const GET_WINNER: IBase_URL;
export declare const saveWinners: ({ id, time }: IdataWinners) => Promise<void>;
export declare const getWinners: () => void;
