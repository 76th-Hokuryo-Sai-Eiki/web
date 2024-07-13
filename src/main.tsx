import { ReactNode, StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

import { sha256 } from "js-sha256";

let asked = false;
function Lock({ children }: { children: ReactNode }) {
    const HASH = import.meta.env.VITE_PASS_HASH;
    if (!HASH) return children;

    const [hash, setHash] = useState<string | null>(null);

    useEffect(() => {
        if (!asked && hash === null) {
            asked = true;
            setHash(sha256(window.prompt("Pass?") ?? ""));
        }
    }, []);

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
                <Lock>
                    <App />
                </Lock>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
