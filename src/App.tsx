import { Progress } from "@nextui-org/progress";
import { useEffect, useReducer, useState } from "react";

import Hashlink from "./components/hashlink";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { LoadingScreenContext } from "./context/loading-screen";
import { useLoadingConfig } from "./hooks/loading-screen";
import IndexPage from "./pages";

import { ThemeContext } from "@/context/theme";
import { useTheme } from "@/hooks/theme";
import LoadingScreen from "@/pages/loading";

export default function App() {
    const [refresh, setRefresh] = useReducer(() => false, true);

    const [loading, setLoading] = useState(true);
    const [fadeout, setFadeout] = useState(false);

    const themeConfig = useTheme();

    const {
        loadingKind,
        isSimple,
        isNormal,
        setSimpleLoading,
        setNormalLoading,
        toggleLoadingKind,
    } = useLoadingConfig();

    const duration = (() => {
        // if (import.meta.env.DEV) return 150;
        if (isSimple) return 500;

        return 3000;
    })();

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
        <>
            <TailwindIndicator />
            <ThemeContext.Provider value={themeConfig}>
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
                    <div className="fixed left-0 top-0 h-screen w-screen">
                        {loading ? (
                            isSimple ? (
                                <div className="flex h-screen w-screen justify-center bg-fixed">
                                    <div
                                        className="w-full"
                                        style={{ height: "0.3rem" }}
                                    >
                                        <Progress
                                            aria-label="Loading..."
                                            className="h-full"
                                            radius="none"
                                            value={100}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        backgroundColor: themeConfig.isDark
                                            ? "black"
                                            : "white",
                                    }}
                                >
                                    <div
                                        className={fadeout ? "fade-out" : ""}
                                        style={{
                                            ["--duration" as string]: `${duration}ms`,
                                        }}
                                    >
                                        <LoadingScreen />
                                    </div>
                                </div>
                            )
                        ) : (
                            (() => {
                                if (!refresh) return;

                                setTimeout(() => {
                                    window.dispatchEvent(
                                        new HashChangeEvent("hashchange"),
                                    );
                                }, 300);

                                setRefresh();

                                return null;
                            })()
                        )}
                    </div>
                    {
                        <Hashlink.Provider>
                            <div className={loading ? "hidden" : "block"}>
                                <IndexPage />
                            </div>
                        </Hashlink.Provider>
                    }
                </LoadingScreenContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
