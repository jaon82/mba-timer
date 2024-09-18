import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  );
}

export default App;
