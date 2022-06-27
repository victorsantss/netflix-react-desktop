import { showActions } from 'store/show/show.slice';
import {
  put,
  call,
  cancel,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { tokenSelector } from 'store/user/user.selector';
import { Data as UserData } from 'store/user/user.type';
import showService from 'services/show/show';
import { PayloadAction } from '@reduxjs/toolkit';
import { ShowId } from 'services/show/show.type';
import { DataShowInfo } from './show.type';

function* getShowInfo(action: PayloadAction<ShowId>) {
  yield put(showActions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showActions.setError('User token was not found'));
    yield cancel();
  }

  try {
    const response: AxiosResponse<DataShowInfo> = yield call(
      // @ts-ignore
      showService({ token: token as string }).getShowInfo,
      action.payload.showId,
    );

    const showInfo = response.data;

    yield put(showActions.setShowInfo(showInfo));
  } catch (exception) {
    yield put(showActions.setError('Error'));
  } finally {
    yield put(showActions.setSettings({ loading: false }));
  }
}

const showSaga = [
  takeLatest('shows/getShowInfo', getShowInfo),
];

export default showSaga;
