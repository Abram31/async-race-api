export interface IData {
    id: string;
    speed?: string;
}
export declare const addSessionStorage: (title: string, data: IData) => void;
export declare const deleteSessionStorage: (title: string, data: IData) => void;
export declare const getSessinoStorage: (title: string) => any;
