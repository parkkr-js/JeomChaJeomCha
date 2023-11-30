import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import SearchProvider from "./model/SearchProvider";
import PurchaseProvider from "./model/PurchaseProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <PurchaseProvider>
          <SearchProvider>
            <Router />
          </SearchProvider>
        </PurchaseProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
