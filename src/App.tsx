import { useEffect, useState } from "react";
import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./context";
import AppRouter from "./Routes";
import { BrowserRouter } from "react-router";
import Menu from "./components/Menu";
import Currency from "./components/Currency";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.className = `bg-${theme}`;
    } else {
      document.body.className = `bg-light`;
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Currency></Currency>
        <ThemeSwitch changeTheme={(t) => setTheme(t)}></ThemeSwitch>
        <ThemeProvider value={theme}>
          <AppRouter></AppRouter>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
