// originally written by @imoaazahmed

import { useEffect, useMemo, useState } from "react";

const Props = {
    key: "loading",
    simple: "simple",
    normal: "normal",
} as const;

type LoadingKind = typeof Props.simple | typeof Props.normal;

export function useLoadingConfig(defaultTheme?: LoadingKind) {
    const [loadingKind, _setLoadingKind] = useState<LoadingKind>(() => {
        const stored = localStorage.getItem(Props.key) as LoadingKind | null;

        return stored || (defaultTheme ?? Props.simple);
    });

    const isSimple = useMemo(() => {
        return loadingKind === Props.simple;
    }, [loadingKind]);

    const isNormal = useMemo(() => {
        return loadingKind === Props.normal;
    }, [loadingKind]);

    const setLoadingKind = (theme: LoadingKind) => {
        localStorage.setItem(Props.key, theme);
        _setLoadingKind(theme);
    };

    const setSimpleLoading = () => setLoadingKind(Props.simple);

    const setNormalLoading = () => setLoadingKind(Props.normal);

    const toggleLoadingKind = () =>
        loadingKind === Props.normal ? setSimpleLoading() : setNormalLoading();

    useEffect(() => {
        setLoadingKind(loadingKind);
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
