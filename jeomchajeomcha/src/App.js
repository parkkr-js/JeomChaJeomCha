import StyleTest from "./pages/StyleTest";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyleTest />
      </ThemeProvider>
    </>
  );
}

export default App;
