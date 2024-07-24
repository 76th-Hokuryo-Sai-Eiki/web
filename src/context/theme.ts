import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContext {
    theme: Theme;
    isDark: boolean;
    isLight: boolean;
    setLightTheme: () => void;
    setDarkTheme: () => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContext);
