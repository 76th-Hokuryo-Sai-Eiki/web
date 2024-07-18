import { Progress } from "@nextui-org/progress";
import { useEffect, useMemo, useState } from "react";

import { LoadingScreenContext } from "./context/loading-screen";
import { useLoadingConfig } from "./hooks/loading-screen";
import IndexPage from "./pages";

import { ThemeContext } from "@/context/theme";
import { useTheme } from "@/hooks/theme";
import LoadingScreen from "@/pages/loading";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [fadeout, setFadeout] = useState(false);

    const { theme, isDark, isLight, setLightTheme, setDarkTheme, toggleTheme } =
        useTheme();

    const {
        loadingKind,
        isSimple,
        isNormal,
        setSimpleLoading,
        setNormalLoading,
        toggleLoadingKind,
    } = useLoadingConfig();

    const duration = useMemo(() => {
        if (import.meta.env.DEV) return 150;
        if (isSimple) return 1000;

        return 3000;
    }, [isSimple]);

    useEffect(() => {
        const fadeoutId = setTimeout(() => {
            setFadeout(true);
        }, duration);

        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 2 * duration);

        return () => {
            clearTimeout(loadingId), clearTimeout(fadeoutId);
        };
    }, [duration]);

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
                    loadingKind,
                    isSimple,
                    isNormal,
                    setSimpleLoading,
                    setNormalLoading,
                    toggleLoadingKind,
                }}
            >
                <div>
                    {loading ? (
                        isSimple ? (
                            <div className="flex h-screen w-screen justify-center">
                                <div
                                    className="w-full"
                                    style={{ height: "0.3rem" }}
                                >
                                    <Progress
                                        isIndeterminate
                                        aria-label="Loading..."
                                        className="h-full"
                                        radius="none"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div
                                style={{
                                    backgroundColor: isDark ? "black" : "white",
                                }}
                            >
                                <div
                                    className={fadeout ? "fade-out" : ""}
                                    style={{
                                        ["--duration" as any]: `${duration}ms`,
                                    }}
                                >
                                    <LoadingScreen />
                                </div>
                            </div>
                        )
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
