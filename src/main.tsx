import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.GITHUB_PAGES ? "/web/" : "/"}>
            <Provider>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
