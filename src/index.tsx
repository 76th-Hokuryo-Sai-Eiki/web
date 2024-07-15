import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import { Guard } from "@/components/guard.tsx";
import "@/styles/globals.css";

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
