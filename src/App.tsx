import Landing from "./screens/landing/landing.screen";
import Login from "./screens/login/login.screen";
import { GlobalStyles } from "./themes/main/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "./themes/main/theme";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./screens/movies-list/movies-list.screen";
import { MOVIES_LIST_URL } from "./screens/movies-list/movies-list.type";
import { LOGIN_URL } from "./screens/login/login.type";
import { LANDING_URL } from "./screens/landing/landing.type";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Landing />} path={LANDING_URL}></Route>
          <Route element={<Login />} path={LOGIN_URL}></Route>
          <Route element={<MoviesList />} path={MOVIES_LIST_URL}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
