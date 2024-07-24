import { createContext } from "react";

import { Theme } from "./theme";

export interface Opacity {
    bgImage: number;
    bgProp: number;
}

export interface PagePreferenceContext {
    opacity: Opacity;
    loadOpacity: (theme?: Theme) => Opacity;
    setOpacity: (value: Opacity, theme?: Theme) => void;
    setBgImageOpacity: (value: number, theme?: Theme) => void;
    setBgPropOpacity: (value: number, theme?: Theme) => void;
    resetBgImageOpacity: (theme?: Theme) => void;
    resetBgPropOpacity: (theme?: Theme) => void;
}

export const PagePreferenceContext = createContext({} as PagePreferenceContext);
