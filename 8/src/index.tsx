import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root"));

/**
 * BrowserRouter - react router dom для навигации по страницам
 * ThemeProvider - провайдер для передачи контекста темы и ее смены в любое место приложения
 */

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
