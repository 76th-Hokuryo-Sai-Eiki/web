// originally written by @imoaazahmed

import { useEffect, useMemo, useState } from "react";

import { removeHash } from "@/functions/utility";

const ThemeProps = {
    key: "theme",
    light: "light",
    dark: "dark",
} as const;

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

export function useTheme(defaultTheme?: Theme) {
    const [theme, setTheme] = useState<Theme>(() => {
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

    const _setTheme = (theme: Theme) => {
        removeHash();
        localStorage.setItem(ThemeProps.key, theme);
        document.documentElement.classList.remove(
            ThemeProps.light,
            ThemeProps.dark,
        );
        document.documentElement.classList.add(theme);
        setTheme(theme);
    };

    const setLightTheme = () => _setTheme(ThemeProps.light);

    const setDarkTheme = () => _setTheme(ThemeProps.dark);

    const toggleTheme = () =>
        theme === ThemeProps.dark ? setLightTheme() : setDarkTheme();

    useEffect(() => {
        _setTheme(theme);
    });

    return { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme };
}
