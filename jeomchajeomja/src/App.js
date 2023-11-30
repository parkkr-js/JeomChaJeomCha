import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import SearchProvider from "./model/SearchProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SearchProvider>
          <Router />
        </SearchProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
