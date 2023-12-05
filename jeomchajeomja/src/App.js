import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import SearchProvider from "./model/SearchProvider";
import PurchaseProvider from "./model/PurchaseProvider";
import ResultProvider from "./model/ResultProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <PurchaseProvider>
            <SearchProvider>
              <ResultProvider>
                <Router />
              </ResultProvider>
            </SearchProvider>
          </PurchaseProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
