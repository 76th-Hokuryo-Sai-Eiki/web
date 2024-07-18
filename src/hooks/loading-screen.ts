// originally written by @imoaazahmed

import { removeHash } from "@/functions/utility";
import { useEffect, useMemo, useState } from "react";

const ThemeProps = {
    key: "loading",
    simple: "simple",
    normal: "normal",
} as const;

type LoadingKind = typeof ThemeProps.simple | typeof ThemeProps.normal;

export function useLoadingConfig(defaultTheme?: LoadingKind) {
    const [loadingKind, setLoadingKind] = useState<LoadingKind>(() => {
        const storedTheme = localStorage.getItem(
            ThemeProps.key,
        ) as LoadingKind | null;

        return storedTheme || (defaultTheme ?? ThemeProps.simple);
    });

    const isSimple = useMemo(() => {
        return loadingKind === ThemeProps.simple;
    }, [loadingKind]);

    const isNormal = useMemo(() => {
        return loadingKind === ThemeProps.normal;
    }, [loadingKind]);

    const _setLoading = (theme: LoadingKind) => {
        removeHash();
        localStorage.setItem(ThemeProps.key, theme);
        setLoadingKind(theme);
    };

    const setSimpleLoading = () => _setLoading(ThemeProps.simple);

    const setNormalLoading = () => _setLoading(ThemeProps.normal);

    const toggleLoadingKind = () =>
        loadingKind === ThemeProps.normal
            ? setSimpleLoading()
            : setNormalLoading();

    useEffect(() => {
        _setLoading(loadingKind);
    });

    return {
        loadingKind,
        isSimple,
        isNormal,
        setSimpleLoading,
        setNormalLoading,
        toggleLoadingKind,
    };
}
