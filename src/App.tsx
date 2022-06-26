import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import Guard from 'components/guard/guard';
import Show from 'screens/show/show';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { SHOW_URL } from 'screens/show/show.type';
import Shows from 'screens/shows/shows.screen';
import { LOGIN_URL } from './screens/login/login.type';
import { LANDING_URL } from './screens/landing/landing.type';
import Landing from './screens/landing/landing.screen';
import Login from './screens/login/login.screen';
import { GlobalStyles } from './themes/main/global-styles';
import theme from './themes/main/theme';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Landing />} path={LANDING_URL} />
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<Guard><Shows /></Guard>} path={SHOWS_URL} />
          <Route element={<Guard><Show /></Guard>} path={SHOW_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
