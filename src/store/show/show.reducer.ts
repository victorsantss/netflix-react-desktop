import { PayloadAction } from '@reduxjs/toolkit';
import { ShowId } from 'services/show/show.type';
import {
  SetError,
  SetSettings,
  SetShowInfo,
  DataShowInfo,
} from 'store/show/show.type';

const getShowInfo = (_state: any, _action: PayloadAction<ShowId>) => {};

const setShowInfo: SetShowInfo = (state, action: PayloadAction<DataShowInfo>) => {
  state.data.showInfo = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  getShowInfo,
  setShowInfo,
  setError,
  setSettings,
};

export default reducers;
