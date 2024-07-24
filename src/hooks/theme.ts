// originally written by @imoaazahmed

import { useEffect, useMemo, useState } from "react";

import { Theme } from "@/context/theme";

const ThemeProps = {
    key: "theme",
    light: "light",
    dark: "dark",
} as const;

export function useTheme(defaultTheme?: Theme) {
    const [theme, _setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem(
            ThemeProps.key,
        ) as Theme | null;

        return storedTheme || (defaultTheme ?? ThemeProps.light);
    });

    const isDark = useMemo(() => {
        return theme === ThemeProps.dark;
    }, [theme]);

    const isLight = useMemo(() => {
        return theme === ThemeProps.light;
    }, [theme]);

    const setTheme = (theme: Theme) => {
        localStorage.setItem(ThemeProps.key, theme);
        document.documentElement.classList.remove(
            ThemeProps.light,
            ThemeProps.dark,
        );
        document.documentElement.classList.add(theme);
        _setTheme(theme);
    };

    const setLightTheme = () => setTheme(ThemeProps.light);

    const setDarkTheme = () => setTheme(ThemeProps.dark);

    const toggleTheme = () =>
        theme === ThemeProps.dark ? setLightTheme() : setDarkTheme();

    useEffect(() => {
        setTheme(theme);
    });

    return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme };
}
