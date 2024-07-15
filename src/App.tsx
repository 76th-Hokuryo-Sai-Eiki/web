import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeContext } from "@/context/theme";
import { useTheme } from "@/hooks/use-theme";
import IndexPage from "@/pages/index";
import LoadingScreen from "@/pages/loading";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [fadeout, setFadeout] = useState(false);
    const { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme } =
        useTheme();

    useEffect(() => {
        const fadeoutId = setTimeout(
            () => {
                setFadeout(true);
            },
            import.meta.env.DEV ? 500 : 3000
        );

        const loadingId = setTimeout(
            () => {
                setLoading(false);
            },
            import.meta.env.DEV ? 1000 : 6000
        );

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
                            className={fadeout ? "fade-out" : ""}
                            style={{
                                ["--duration" as any]: "3s",
                            }}
                        >
                            <LoadingScreen />
                        </div>
                    </div>
                ) : (
                    <Routes>
                        <Route element={<IndexPage />} path="/" />
                        {/* <Route element={<AccessPage />} path="/access" />
                        <Route element={<PricingPage />} path="/pricing" />
                        <Route element={<BlogPage />} path="/blog" />
                        <Route element={<AboutPage />} path="/about" /> */}
                    </Routes>
                )}
            </div>
        </ThemeContext.Provider>
    );
}
