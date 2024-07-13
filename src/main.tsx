import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
