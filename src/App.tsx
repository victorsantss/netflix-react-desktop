import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import Landing from './screens/landing/landing.screen';
import Login from './screens/login/login.screen';
import { GlobalStyles } from './themes/main/global-styles';
import theme from './themes/main/theme';
import MoviesList from './screens/movies-list/movies-list.screen';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';
import { LOGIN_URL } from './screens/login/login.type';
import { LANDING_URL } from './screens/landing/landing.type';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Landing />} path={LANDING_URL} />
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
