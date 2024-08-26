import { Progress } from "@nextui-org/progress";
import { lazy, Suspense, useEffect, useReducer, useState } from "react";

import Hashlink from "@/components/hashlink";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { LoadingScreenContext } from "@/context/loading-screen";
import { ThemeContext } from "@/context/theme";
import isCrawler from "@/functions/is-crawler";
import { useLoadingConfig } from "@/hooks/loading-screen";
import { useTheme } from "@/hooks/theme";
import LoadingScreen from "@/pages/common/loading";

const IndexPage = lazy(() => import("@/pages"));

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
        if (isCrawler) return 0;
        if (isSimple) return 300;

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

    if (isCrawler) {
        return (
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
                    <Suspense>
                        <IndexPage />
                    </Suspense>
                </LoadingScreenContext.Provider>
            </ThemeContext.Provider>
        );
    }

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
                                if (loadingKind === "unknown")
                                    setSimpleLoading();

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
                                <Suspense>
                                    <IndexPage />
                                </Suspense>
                            </div>
                        </Hashlink.Provider>
                    }
                </LoadingScreenContext.Provider>
            </ThemeContext.Provider>
        </>
    );
}
