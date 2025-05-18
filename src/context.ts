import { createContext } from "react";

export const ThemeContext = createContext("light"); //default value
export const ThemeProvider = ThemeContext.Provider;
