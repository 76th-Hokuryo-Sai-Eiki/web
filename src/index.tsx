import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import { makeGuard } from "@/components/guard.tsx";
import "@/styles/globals.css";

const Guard = makeGuard();

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
