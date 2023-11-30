import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import SearchProvider from "./model/SearchProvider";
import ShoppingCartProvider from "./model/ShoppingCartProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ShoppingCartProvider>
          <SearchProvider>
            <Router />
          </SearchProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
