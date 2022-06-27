import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSaga from 'store/user/user.saga';
import { showsReducer } from 'store/shows/shows.slice';
import { all } from 'redux-saga/effects';
import showsSaga from 'store/shows/shows.saga';
import showSaga from 'store/show/show.saga';
import { showReducer } from 'store/show/show.slice';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsReducer,
    show: showReducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
    ...showSaga,
  ]);
}

saga.run(storeSaga);

export default store;
