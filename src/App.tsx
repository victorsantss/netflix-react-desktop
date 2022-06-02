import Login from "./screens/login/login.screen";
import GlobalStyles from "../src/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./themes/main/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
