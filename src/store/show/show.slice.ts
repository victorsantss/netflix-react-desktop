import { createSlice } from '@reduxjs/toolkit';
import reducers from 'store/show/show.reducer';
import { DataShowInfo } from 'store/show/show.type';
import { ShowInfo } from './show.type';

const initialState: ShowInfo = {
  data: {
    showInfo: {} as DataShowInfo,
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const {
  actions: showActions,
  reducer: showReducer,
} = showsSlice;

export {
  showReducer,
  showActions,
};

export default showsSlice;
