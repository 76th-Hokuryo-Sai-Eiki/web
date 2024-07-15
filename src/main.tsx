import { ReactNode, StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { sha256 } from "js-sha256";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import "@/styles/globals.css";

let asked = false;

function Guard({ children }: { children: ReactNode }) {
    const HASH = import.meta.env.VITE_PASS_HASH;
    const [hash, setHash] = useState<string | null>(null);

    useEffect(() => {
        if (HASH && !asked && hash === null) {
            asked = true;
            setHash(sha256(window.prompt("Pass?") ?? ""));
        }
    }, [HASH, hash]);

    if (!HASH) return children;

    return hash === HASH ? (
        children
    ) : (
        <h1 style={{ fontSize: "28pt" }}>Forbidden</h1>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={"/web/"}>
            <Provider>
                <Guard>
                    <App />
                </Guard>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
