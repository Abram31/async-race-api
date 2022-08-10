export declare const main: HTMLElement;
export declare const mainH3: HTMLElement;
export interface IcarsCreate {
    id?: number;
    color?: string;
    name?: string;
    velocity?: number;
}
export declare const carsCreate: (data: IcarsCreate[]) => void;
