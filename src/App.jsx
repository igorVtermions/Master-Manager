import CharProvider from "./Context/CharContext";
import { GlobalStyle } from "./global/globalStyle";
import Home from "./home";

export default function App() {
  return (
      <CharProvider>
        <GlobalStyle />
        <Home/>
      </CharProvider>
  );
}
