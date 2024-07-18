import { createContext } from "react";

export interface LoadingScreenContext {
    loadingKind: "simple" | "normal";
    isSimple: boolean;
    isNormal: boolean;
    setSimpleLoading: () => void;
    setNormalLoading: () => void;
    toggleLoadingKind: () => void;
}

export const LoadingScreenContext = createContext({} as LoadingScreenContext);
