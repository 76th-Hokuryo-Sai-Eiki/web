import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <Provider>
                <App />
            </Provider>
        </HashRouter>
    </StrictMode>
);
