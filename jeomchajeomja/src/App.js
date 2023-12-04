import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import SearchProvider from "./model/SearchProvider";
import PurchaseProvider from "./model/PurchaseProvider";
import ResultProvider from "./model/ResultProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <PurchaseProvider>
          <SearchProvider>
            <ResultProvider>
              <Router />
            </ResultProvider>
          </SearchProvider>
        </PurchaseProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
