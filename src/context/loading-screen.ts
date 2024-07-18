import { Dispatch, SetStateAction, createContext } from "react";

export interface LoadingScreenContext {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

export const LoadingScreenContext = createContext({} as LoadingScreenContext);
