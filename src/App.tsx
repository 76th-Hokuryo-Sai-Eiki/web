import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import LoadingScreen from "@/pages/loading";
import IndexPage from "@/pages/index";
import AccessPage from "@/pages/access";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import { useTheme } from "@/hooks/use-theme";
import { ThemeContext } from "./context/theme";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [fadeout, setFadeout] = useState(false);
    const { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme } =
        useTheme();

    useEffect(() => {
        const fadeoutId = setTimeout(() => {
            setFadeout(true);
        }, 3000);

        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 6000);

        return () => {
            clearTimeout(loadingId), clearTimeout(fadeoutId);
        };
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark,
                isLight,
                setLightTheme,
                setDarkTheme,
                toggleTheme,
            }}
        >
            <div>
                {loading ? (
                    <div
                        style={{ backgroundColor: isDark ? "black" : "white" }}
                    >
                        <div
                            style={{
                                ["--duration" as any]: "3s",
                            }}
                            className={fadeout ? "fade-out" : ""}
                        >
                            <LoadingScreen />
                        </div>
                    </div>
                ) : (
                    <Routes>
                        <Route element={<IndexPage />} path="/" />
                        <Route element={<AccessPage />} path="/access" />
                        <Route element={<PricingPage />} path="/pricing" />
                        <Route element={<BlogPage />} path="/blog" />
                        <Route element={<AboutPage />} path="/about" />
                    </Routes>
                )}
            </div>
        </ThemeContext.Provider>
    );
}
