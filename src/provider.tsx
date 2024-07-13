import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function Provider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();

    return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
}
