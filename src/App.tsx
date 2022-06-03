import Login from "./screens/login/login.screen";
import GlobalStyles from "./themes/main/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "./themes/main/theme";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./screens/movies-list/movies-list.screen";
import { MOVIES_LIST_URL } from "./screens/movies-list/movies-list.type";
import { LOGIN_URL } from "./screens/login/login.type";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL}></Route>
          <Route element={<MoviesList />} path={MOVIES_LIST_URL}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
