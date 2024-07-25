import { createContext } from "react";

export type LoadingKind = "simple" | "normal" | "unknown";

export interface LoadingScreenContext {
    loadingKind: LoadingKind;
    isSimple: boolean;
    isNormal: boolean;
    setSimpleLoading: () => void;
    setNormalLoading: () => void;
    toggleLoadingKind: () => void;
}

export const LoadingScreenContext = createContext({} as LoadingScreenContext);
