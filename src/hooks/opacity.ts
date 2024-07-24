// originally written by @imoaazahmed

import { useCallback, useContext, useEffect, useState } from "react";

import { Opacity } from "@/context/page-preference";
import { Theme, ThemeContext } from "@/context/theme";

export function useOpacity(
    defaultOpacity: () => { light: Opacity; dark: Opacity },
) {
    const { theme } = useContext(ThemeContext);

    const getKey = (theme: Theme) => `opacity.${theme}`;

    const loadOpacity = useCallback(
        (_theme: Theme = theme) => {
            const stored = sessionStorage.getItem(getKey(_theme)) as
                | string
                | null;

            return stored
                ? JSON.parse(stored)
                : (defaultOpacity()[_theme] as Opacity);
        },
        [defaultOpacity, theme],
    );

    const [opacity, _setOpacity] = useState<Opacity>(loadOpacity(theme));

    const setOpacity = useCallback(
        (value: Opacity, _theme: Theme = theme) => {
            sessionStorage.setItem(getKey(_theme), JSON.stringify(value));
            _setOpacity(value);
        },
        [theme],
    );

    // useEffect(() => {
    //     ["light", "dark"].forEach((_theme: string) =>
    //         setOpacity(loadOpacity(_theme as Theme), _theme as Theme),
    //     );
    // }, [loadOpacity, setOpacity]);

    const setBgImageOpacity = (value: number, _theme: Theme = theme) => {
        setOpacity({ ...opacity, bgImage: value }, _theme);
    };
    const setBgPropOpacity = (value: number, _theme: Theme = theme) => {
        setOpacity({ ...opacity, bgProp: value }, _theme);
    };

    const resetBgImageOpacity = (_theme: Theme = theme) => {
        setOpacity(
            { ...opacity, bgImage: defaultOpacity()[_theme].bgImage },
            _theme,
        );
    };
    const resetBgPropOpacity = (_theme: Theme = theme) => {
        setOpacity(
            { ...opacity, bgProp: defaultOpacity()[_theme].bgProp },
            _theme,
        );
    };

    useEffect(() => {
        setOpacity(opacity);
    });

    return {
        opacity,
        loadOpacity,
        setOpacity,
        setBgImageOpacity,
        setBgPropOpacity,
        resetBgImageOpacity,
        resetBgPropOpacity,
    };
}
