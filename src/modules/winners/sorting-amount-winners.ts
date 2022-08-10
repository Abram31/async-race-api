/* eslint-disable max-len */
import { addSessionStorage, getSessinoStorage } from '../memories/sessionStorage';
import { IdataWinners } from './save-winners';
import { createListWinners } from './winners-page';

export const sortingWinners = (event:MouseEvent) => {
    const element = event.target as HTMLElement;
    addSessionStorage('Sorting-type', { sorting: 'winners' });
    if (getSessinoStorage('Sorting-winners') && getSessinoStorage('Sorting-winners')[0].sorting === 'highest') {
        addSessionStorage('Sorting-winners', { sorting: 'lowest' });
    } else
    // if (!getSessinoStorage('Sorting-winners')[0] || getSessinoStorage('Sorting-winners')[0].sorting === 'lowest')
    {
        addSessionStorage('Sorting-winners', { sorting: 'highest' });
    }
    createListWinners();
};

export const sortingElementsByLowerWinners = (data: IdataWinners[]) => data.sort((a: IdataWinners, b: IdataWinners) => a.wins! - b.wins!);
export const sortingElementsByUpperWinners = (data: IdataWinners[]) => data.sort((a: IdataWinners, b: IdataWinners) => b.wins! - a.wins!);
