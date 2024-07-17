import { createContext } from "react";

export interface ThemeContext {
    theme: "light" | "dark";
    isDark: boolean;
    isLight: boolean;
    setLightTheme: () => void;
    setDarkTheme: () => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContext);
