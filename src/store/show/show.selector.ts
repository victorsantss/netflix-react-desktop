import { Store } from 'store/store/store.type';

export const loadingSelector = (state: Store) => state.show.settings.loading;

export const showInfoSelector = (state: Store) => state.show.data.showInfo;
