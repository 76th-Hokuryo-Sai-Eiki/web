import { useEffect, useState } from "react";

import IndexPage from "./pages";

import { ThemeContext } from "@/context/theme";
import { useTheme } from "@/hooks/theme";
import LoadingScreen from "@/pages/loading";
import { LoadingScreenContext } from "./context/loading-screen";

export default function App() {
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);

    const [loading, setLoading] = useState(true);
    const [fadeout, setFadeout] = useState(false);
    const { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme } =
        useTheme();

    useEffect(() => {
        const duration = (() => {
            // if (import.meta.env.DEV) return 150;
            if (!showLoadingScreen) return 100;
            return 3000;
        })();

        const fadeoutId = setTimeout(() => {
            setFadeout(true);
        }, duration);

        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 2 * duration);

        return () => {
            clearTimeout(loadingId), clearTimeout(fadeoutId);
        };
    }, [showLoadingScreen]);

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
            <LoadingScreenContext.Provider
                value={{
                    show: showLoadingScreen,
                    setShow: setShowLoadingScreen,
                }}
            >
                <div>
                    {loading ? (
                        <div
                            style={{
                                backgroundColor: isDark ? "black" : "white",
                            }}
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
                        <IndexPage />
                        // <Routes>
                        // {/* <Route element={<IndexPage />} path="/" /> */}
                        // {/* <Route element={<AccessPage />} path="/access" />
                        // <Route element={<PricingPage />} path="/pricing" />
                        // <Route element={<BlogPage />} path="/blog" />
                        // <Route element={<AboutPage />} path="/about" /> */}
                        // </Routes>
                    )}
                </div>
            </LoadingScreenContext.Provider>
        </ThemeContext.Provider>
    );
}
