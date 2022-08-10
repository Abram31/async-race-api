/* eslint-disable max-len */
import { addSessionStorage, getSessinoStorage } from '../memories/sessionStorage';
import { IdataWinners } from './save-winners';
import { createListWinners } from './winners-page';

export const sortingSpeed = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    addSessionStorage('Sorting-type', {sorting: 'speed'});
    if (getSessinoStorage('Sorting-speed') && getSessinoStorage('Sorting-speed') && getSessinoStorage('Sorting-speed')[0].sorting === 'fastest') {
        addSessionStorage('Sorting-speed', { sorting: 'slowest' });
    } else
    // if (!getSessinoStorage('Sorting-winners')[0] || getSessinoStorage('Sorting-winners')[0] || getSessinoStorage('Sorting-winners')[0].sorting === 'slowest')
    {
        addSessionStorage('Sorting-speed', { sorting: 'fastest' });
    }
    createListWinners();
};

export const sortingElementsBySlowest = (data: IdataWinners[]) => data.sort((a: IdataWinners, b: IdataWinners) => a.time! - b.time!);
export const sortingElementsByFastest = (data: IdataWinners[]) => data.sort((a: IdataWinners, b: IdataWinners) => b.time! - a.time!);
